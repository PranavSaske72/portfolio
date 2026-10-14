import React, { createContext, useContext, useState, useEffect, useMemo } from 'react'

export interface AccentTheme {
  id: string
  name: string
  hex: string
  gradient: string
  rgb: string
  text: string
}

export const ACCENT_PRESETS: AccentTheme[] = [
  {
    id: 'green',
    name: 'Lime Green',
    hex: '#B8FF3C',
    gradient: 'linear-gradient(135deg, #B8FF3C 0%, #A3E635 60%, #84CC16 100%)',
    rgb: '184, 255, 60',
    text: '#09090B',
  },
  {
    id: 'red',
    name: 'Crimson Red',
    hex: '#EF4444',
    gradient: 'linear-gradient(135deg, #F87171 0%, #EF4444 60%, #DC2626 100%)',
    rgb: '239, 68, 68',
    text: '#FFFFFF',
  },
  {
    id: 'blue',
    name: 'Ocean Blue',
    hex: '#0EA5E9',
    gradient: 'linear-gradient(135deg, #38BDF8 0%, #0EA5E9 60%, #0284C7 100%)',
    rgb: '14, 165, 233',
    text: '#FFFFFF',
  },
  {
    id: 'purple',
    name: 'Royal Purple',
    hex: '#A855F7',
    gradient: 'linear-gradient(135deg, #C084FC 0%, #A855F7 60%, #9333EA 100%)',
    rgb: '168, 85, 247',
    text: '#FFFFFF',
  },
  {
    id: 'orange',
    name: 'Sunset Orange',
    hex: '#F97316',
    gradient: 'linear-gradient(135deg, #FB923C 0%, #F97316 60%, #EA580C 100%)',
    rgb: '249, 115, 22',
    text: '#FFFFFF',
  },
]

export function hexToRgb(hexInput: string): { r: number; g: number; b: number } {
  let hex = hexInput.replace('#', '').trim()
  if (hex.length === 3) {
    hex = hex.split('').map((char) => char + char).join('')
  }
  const intVal = parseInt(hex, 16)
  if (isNaN(intVal) || hex.length !== 6) {
    return { r: 184, g: 255, b: 60 } // fallback to lime
  }
  return {
    r: (intVal >> 16) & 255,
    g: (intVal >> 8) & 255,
    b: intVal & 255,
  }
}

function adjustBrightness(hex: string, percent: number): string {
  const { r, g, b } = hexToRgb(hex)
  const amt = Math.round(2.55 * percent)
  const clamp = (val: number) => Math.min(255, Math.max(0, val + amt))
  const R = clamp(r).toString(16).padStart(2, '0')
  const G = clamp(g).toString(16).padStart(2, '0')
  const B = clamp(b).toString(16).padStart(2, '0')
  return `#${R}${G}${B}`
}

export function createCustomAccent(hex: string): AccentTheme {
  const { r, g, b } = hexToRgb(hex)
  // Relative luminance calculation
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
  const textColor = luminance > 0.55 ? '#09090B' : '#FFFFFF'
  const lighter = adjustBrightness(hex, 20)
  const darker = adjustBrightness(hex, -20)

  return {
    id: 'custom',
    name: 'Custom',
    hex: hex.startsWith('#') ? hex : `#${hex}`,
    gradient: `linear-gradient(135deg, ${lighter} 0%, ${hex} 60%, ${darker} 100%)`,
    rgb: `${r}, ${g}, ${b}`,
    text: textColor,
  }
}

interface AccentThemeContextType {
  currentAccent: AccentTheme
  presets: AccentTheme[]
  setPreset: (presetId: string) => void
  setCustomColor: (hex: string) => void
  resetToDefault: () => void
  isCustom: boolean
}

const AccentThemeContext = createContext<AccentThemeContextType | undefined>(undefined)

const STORAGE_KEY = 'pranav-theme-accent'
const CUSTOM_STORAGE_KEY = 'pranav-theme-accent-custom-hex'

export const AccentThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [accent, setAccent] = useState<AccentTheme>(() => {
    if (typeof window === 'undefined') return ACCENT_PRESETS[0]
    try {
      const savedType = localStorage.getItem(STORAGE_KEY)
      if (savedType === 'custom') {
        const customHex = localStorage.getItem(CUSTOM_STORAGE_KEY)
        if (customHex) {
          return createCustomAccent(customHex)
        }
      } else if (savedType) {
        const found = ACCENT_PRESETS.find((p) => p.id === savedType)
        if (found) return found
      }
    } catch {
      // fallback
    }
    return ACCENT_PRESETS[0]
  })

  // Apply CSS custom properties dynamically to document.documentElement
  useEffect(() => {
    const root = document.documentElement
    root.style.setProperty('--theme-accent', accent.hex)
    root.style.setProperty('--theme-accent-rgb', accent.rgb)
    root.style.setProperty('--theme-accent-gradient', accent.gradient)
    root.style.setProperty('--theme-accent-text', accent.text)
    root.style.setProperty('--accent', accent.hex)
    root.style.setProperty('--accent-text', accent.text)
    root.style.setProperty('--accent-dim', `rgba(${accent.rgb}, 0.15)`)

    try {
      if (accent.id === 'custom') {
        localStorage.setItem(STORAGE_KEY, 'custom')
        localStorage.setItem(CUSTOM_STORAGE_KEY, accent.hex)
      } else {
        localStorage.setItem(STORAGE_KEY, accent.id)
      }
    } catch {
      // storage unavailable
    }
  }, [accent])

  const setPreset = (presetId: string) => {
    const found = ACCENT_PRESETS.find((p) => p.id === presetId)
    if (found) {
      setAccent(found)
    }
  }

  const setCustomColor = (hex: string) => {
    if (!hex) return
    const custom = createCustomAccent(hex)
    setAccent(custom)
  }

  const resetToDefault = () => {
    setAccent(ACCENT_PRESETS[0])
    try {
      localStorage.removeItem(STORAGE_KEY)
      localStorage.removeItem(CUSTOM_STORAGE_KEY)
    } catch {
      // ignore
    }
  }

  const isCustom = accent.id === 'custom'

  const value = useMemo(
    () => ({
      currentAccent: accent,
      presets: ACCENT_PRESETS,
      setPreset,
      setCustomColor,
      resetToDefault,
      isCustom,
    }),
    [accent, isCustom]
  )

  return (
    <AccentThemeContext.Provider value={value}>
      {children}
    </AccentThemeContext.Provider>
  )
}

export function useAccentTheme() {
  const context = useContext(AccentThemeContext)
  if (!context) {
    throw new Error('useAccentTheme must be used within an AccentThemeProvider')
  }
  return context
}
