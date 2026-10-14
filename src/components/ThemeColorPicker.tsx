import React, { useState, useRef, useEffect } from 'react'
import { useAccentTheme } from '../context/AccentThemeContext'
import { Palette, Check, RotateCcw, Pipette } from 'lucide-react'

interface ThemeColorPickerProps {
  align?: 'left' | 'right'
  isInlineMobile?: boolean
}

export const ThemeColorPicker: React.FC<ThemeColorPickerProps> = ({
  align = 'right',
  isInlineMobile = false,
}) => {
  const { currentAccent, presets, setPreset, setCustomColor, resetToDefault, isCustom } =
    useAccentTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [hexInput, setHexInput] = useState(currentAccent.hex)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const colorInputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    setHexInput(currentAccent.hex)
  }, [currentAccent.hex])

  // Close popover when clicking outside or pressing Escape
  useEffect(() => {
    if (!isOpen || isInlineMobile) return

    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, isInlineMobile])

  const handleHexInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    setHexInput(val)
    if (/^#?([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(val)) {
      setCustomColor(val.startsWith('#') ? val : `#${val}`)
    }
  }

  const handleNativeColorPick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const color = e.target.value
    setHexInput(color)
    setCustomColor(color)
  }

  // If rendered as inline component for mobile drawer
  if (isInlineMobile) {
    return (
      <div className="p-4 rounded-2xl bg-neutral-100 dark:bg-neutral-900 border border-black/5 dark:border-white/10">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Palette className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
            <span className="font-sans text-xs font-bold text-neutral-900 dark:text-white uppercase tracking-wider">
              Theme Color
            </span>
          </div>
          <span className="font-mono text-[11px] text-neutral-500">
            {currentAccent.name}
          </span>
        </div>

        {/* Preset Circles */}
        <div className="flex items-center gap-2 mb-3">
          {presets.map((preset) => {
            const isSelected = !isCustom && currentAccent.id === preset.id
            return (
              <button
                key={preset.id}
                type="button"
                onClick={() => setPreset(preset.id)}
                aria-label={`Select ${preset.name} theme`}
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform hover:scale-110 shadow-xs relative ${
                  isSelected ? 'ring-2 ring-neutral-950 dark:ring-white scale-105' : ''
                }`}
                style={{ backgroundColor: preset.hex }}
              >
                {isSelected && (
                  <Check
                    className="w-4 h-4"
                    style={{ color: preset.text }}
                    strokeWidth={3}
                  />
                )}
              </button>
            )
          })}

          {/* Custom Color Trigger */}
          <button
            type="button"
            onClick={() => colorInputRef.current?.click()}
            aria-label="Pick custom theme color"
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform hover:scale-110 shadow-xs relative border-2 border-dashed ${
              isCustom
                ? 'ring-2 ring-neutral-950 dark:ring-white border-transparent'
                : 'border-neutral-400 dark:border-neutral-600'
            }`}
            style={{
              background: isCustom
                ? currentAccent.hex
                : 'conic-gradient(from 180deg at 50% 50%, #FF0000, #FFA500, #FFFF00, #008000, #0000FF, #4B0082, #EE82EE, #FF0000)',
            }}
          >
            {isCustom ? (
              <Check className="w-4 h-4" style={{ color: currentAccent.text }} strokeWidth={3} />
            ) : (
              <Pipette className="w-3.5 h-3.5 text-white drop-shadow-md" />
            )}
          </button>
          <input
            ref={colorInputRef}
            type="color"
            value={currentAccent.hex}
            onChange={handleNativeColorPick}
            className="sr-only"
            aria-hidden="true"
          />
        </div>

        {/* Revert / Hex Info */}
        <div className="flex items-center justify-between pt-2 border-t border-black/5 dark:border-white/10 text-xs font-mono">
          <span className="text-neutral-500 uppercase">{currentAccent.hex}</span>
          {currentAccent.id !== 'green' && (
            <button
              type="button"
              onClick={resetToDefault}
              className="text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white flex items-center gap-1 text-[11px] font-semibold"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset to Green</span>
            </button>
          )}
        </div>
      </div>
    )
  }

  return (
    <div ref={containerRef} className="relative inline-block text-left">
      {/* Trigger Button next to Sun/Moon */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        aria-label="Customize theme accent color"
        className="w-9 h-9 rounded-full border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-900 flex items-center justify-center text-text-muted hover:text-text transition-all duration-200 shadow-2xs relative group"
        title={`Theme Color: ${currentAccent.name}`}
      >
        <Palette className="w-4 h-4 transition-transform group-hover:rotate-12" />
        {/* Glowing active color pip */}
        <span
          className="absolute bottom-1 right-1 w-2.5 h-2.5 rounded-full ring-2 ring-white dark:ring-neutral-900 shadow-xs"
          style={{ backgroundColor: currentAccent.hex }}
        />
      </button>

      {/* Floating Popover Menu */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="Theme Color Options"
          className={`absolute ${
            align === 'right' ? 'right-0' : 'left-0'
          } mt-2 w-72 p-4 rounded-2xl bg-white dark:bg-neutral-900 border border-black/10 dark:border-white/10 shadow-2xl z-50 animate-hero-fade`}
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-black/5 dark:border-white/10 mb-3.5">
            <div>
              <h4 className="font-sans text-xs font-bold text-neutral-900 dark:text-white uppercase tracking-wider">
                Theme Color
              </h4>
              <p className="text-[11px] text-neutral-500 font-sans">
                Active: <strong className="text-neutral-900 dark:text-white">{currentAccent.name}</strong>
              </p>
            </div>
            <span
              className="w-4 h-4 rounded-full shadow-inner ring-2 ring-black/10 dark:ring-white/10"
              style={{ backgroundColor: currentAccent.hex }}
            />
          </div>

          {/* Swatches Label */}
          <span className="block font-mono text-[10px] uppercase tracking-wider text-neutral-400 mb-2">
            Preset Palettes
          </span>

          {/* Preset Buttons Grid */}
          <div className="grid grid-cols-5 gap-2 mb-4">
            {presets.map((preset) => {
              const isSelected = !isCustom && currentAccent.id === preset.id
              return (
                <button
                  key={preset.id}
                  type="button"
                  onClick={() => {
                    setPreset(preset.id)
                  }}
                  title={preset.name}
                  aria-label={`Select ${preset.name}`}
                  className={`w-10 h-10 rounded-xl flex flex-col items-center justify-center transition-all duration-200 hover:scale-105 shadow-xs relative ${
                    isSelected
                      ? 'ring-2 ring-neutral-950 dark:ring-white ring-offset-2 ring-offset-white dark:ring-offset-neutral-900 scale-105'
                      : 'opacity-90 hover:opacity-100'
                  }`}
                  style={{ backgroundColor: preset.hex }}
                >
                  {isSelected && (
                    <Check
                      className="w-4 h-4 drop-shadow-sm"
                      style={{ color: preset.text }}
                      strokeWidth={3}
                    />
                  )}
                </button>
              )
            })}
          </div>

          {/* Custom Color Wheel / Hex Input */}
          <div className="p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/60 border border-black/5 dark:border-white/5 mb-3">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-500 font-semibold flex items-center gap-1.5">
                <Pipette className="w-3 h-3 text-neutral-600 dark:text-neutral-400" />
                <span>Custom Color</span>
              </span>

              <button
                type="button"
                onClick={() => colorInputRef.current?.click()}
                className="text-[11px] font-sans font-medium text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white underline cursor-pointer"
              >
                Color Wheel
              </button>
            </div>

            <div className="flex items-center gap-2">
              {/* Native Color Picker Circle */}
              <button
                type="button"
                onClick={() => colorInputRef.current?.click()}
                aria-label="Open color picker"
                className={`w-8 h-8 rounded-lg shrink-0 flex items-center justify-center shadow-xs cursor-pointer border ${
                  isCustom ? 'border-neutral-900 dark:border-white' : 'border-neutral-200 dark:border-neutral-700'
                }`}
                style={{
                  background: isCustom
                    ? currentAccent.hex
                    : 'conic-gradient(from 180deg at 50% 50%, #FF0000, #FFA500, #FFFF00, #008000, #0000FF, #4B0082, #EE82EE, #FF0000)',
                }}
              >
                {isCustom ? (
                  <Check className="w-3.5 h-3.5" style={{ color: currentAccent.text }} strokeWidth={3} />
                ) : (
                  <Pipette className="w-3.5 h-3.5 text-white drop-shadow-md" />
                )}
              </button>
              <input
                ref={colorInputRef}
                type="color"
                value={currentAccent.hex}
                onChange={handleNativeColorPick}
                className="sr-only"
                aria-hidden="true"
              />

              {/* Hex Code Input */}
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={hexInput}
                  onChange={handleHexInputChange}
                  placeholder="#B8FF3C"
                  maxLength={7}
                  className="w-full px-2.5 py-1.5 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white font-mono text-xs focus:outline-none focus:border-neutral-950 dark:focus:border-white"
                />
              </div>
            </div>
          </div>

          {/* Quick Revert to Signature Green */}
          {currentAccent.id !== 'green' && (
            <button
              type="button"
              onClick={resetToDefault}
              className="w-full py-2 px-3 rounded-xl bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 text-xs font-sans font-medium flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5 text-neutral-500" />
              <span>Reset to Bright Green (Default)</span>
            </button>
          )}
        </div>
      )}
    </div>
  )
}
