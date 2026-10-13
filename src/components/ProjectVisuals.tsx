import React from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'

/**
 * Smart Irrigation System Cover Visual:
 * Schematic-style IoT blueprint illustration with an ESP32 board outline,
 * soil probe in a ground cross-section, a dashed signal path to a water valve/pump,
 * and animated pulse dots along the signal path (respecting reduced motion).
 */
export const SmartIrrigationVisual: React.FC = () => {
  const prefersReduced = useReducedMotion()

  return (
    <div
      className="relative w-full h-full min-h-[220px] sm:min-h-[260px] bg-surface-2/80 rounded-lg p-4 flex items-center justify-center overflow-hidden border border-border"
      aria-label="Smart Irrigation System schematic diagram"
      role="img"
    >
      {/* Blueprint grid lines */}
      <svg
        className="w-full h-full max-w-[460px] max-h-[240px]"
        viewBox="0 0 460 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="soil-hatch" width="8" height="8" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="8" stroke="currentColor" strokeWidth="0.8" className="text-border-strong" />
          </pattern>
        </defs>

        {/* 1. ESP32 Board Schematic Outline */}
        <g transform="translate(30, 40)">
          <rect
            x="0"
            y="0"
            width="100"
            height="130"
            rx="6"
            className="fill-surface stroke-border-strong"
            strokeWidth="1.5"
          />
          {/* SoC Chip */}
          <rect
            x="20"
            y="25"
            width="60"
            height="55"
            rx="3"
            className="fill-surface-2 stroke-accent/40"
            strokeWidth="1"
          />
          <text
            x="50"
            y="48"
            textAnchor="middle"
            className="fill-accent font-mono text-[9px] font-semibold"
          >
            ESP32
          </text>
          <text
            x="50"
            y="62"
            textAnchor="middle"
            className="fill-text-dim font-mono text-[7px]"
          >
            MCU // ADC
          </text>

          {/* Microcontroller pins */}
          {[-8, 0, 8, 16, 24, 32, 40, 48].map((offset, i) => (
            <React.Fragment key={i}>
              <rect x="-4" y={50 + offset} width="5" height="4" className="fill-border-strong" />
              <rect x="99" y={50 + offset} width="5" height="4" className="fill-border-strong" />
            </React.Fragment>
          ))}

          {/* Status LED */}
          <circle cx="28" cy="15" r="3" className="fill-accent animate-pulse" />
          <text x="36" y="18" className="fill-text-dim font-mono text-[7px]">GPIO2</text>
        </g>

        {/* 2. Signal Path 1: Soil Sensor to ESP32 ADC */}
        <path
          d="M 230 150 L 150 150 L 150 110 L 130 110"
          className="stroke-border-strong"
          strokeWidth="1.5"
          strokeDasharray="4 3"
        />
        {/* Animated pulse dot from soil sensor */}
        {!prefersReduced && (
          <circle r="3" className="fill-accent">
            <animateMotion
              path="M 230 150 L 150 150 L 150 110 L 130 110"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>
        )}
        <text x="175" y="142" textAnchor="middle" className="fill-text-dim font-mono text-[8px]">
          ADC READ
        </text>

        {/* 3. Soil Probe in Ground Cross-Section */}
        <g transform="translate(230, 90)">
          {/* Ground profile */}
          <rect
            x="0"
            y="50"
            width="80"
            height="55"
            fill="url(#soil-hatch)"
            className="stroke-border"
            strokeWidth="1"
          />
          <line x1="0" y1="50" x2="80" y2="50" className="stroke-accent/70" strokeWidth="1.5" />
          <text x="40" y="44" textAnchor="middle" className="fill-text-muted font-mono text-[8px]">
            SOIL BED
          </text>

          {/* Sensor Probe Head */}
          <rect x="25" y="10" width="30" height="25" rx="2" className="fill-surface stroke-border-strong" strokeWidth="1" />
          <text x="40" y="26" textAnchor="middle" className="fill-text font-mono text-[7px]">PROBE</text>

          {/* Twin prongs into soil */}
          <rect x="30" y="35" width="4" height="40" rx="1" className="fill-accent/80" />
          <rect x="46" y="35" width="4" height="40" rx="1" className="fill-accent/80" />
          <text x="40" y="92" textAnchor="middle" className="fill-text-dim font-mono text-[7px]">MOISTURE</text>
        </g>

        {/* 4. Signal Path 2: ESP32 Trigger to Water Actuator */}
        <path
          d="M 130 70 L 350 70 L 350 90"
          className="stroke-accent"
          strokeWidth="1.5"
          strokeDasharray="5 3"
        />
        {/* Animated pulse dot to valve */}
        {!prefersReduced && (
          <circle r="3.5" className="fill-accent">
            <animateMotion
              path="M 130 70 L 350 70 L 350 90"
              dur="2.5s"
              repeatCount="indefinite"
            />
          </circle>
        )}
        <text x="240" y="64" textAnchor="middle" className="fill-accent font-mono text-[8px] font-medium">
          TRIGGER SIGNAL
        </text>

        {/* 5. Water Valve / Actuator Box */}
        <g transform="translate(325, 90)">
          <rect
            x="0"
            y="0"
            width="55"
            height="45"
            rx="4"
            className="fill-surface stroke-border-strong"
            strokeWidth="1.5"
          />
          <text x="27" y="18" textAnchor="middle" className="fill-text font-mono text-[8px] font-medium">
            VALVE
          </text>
          <text x="27" y="32" textAnchor="middle" className="fill-text-dim font-mono text-[7px]">
            RELAY ACT
          </text>

          {/* Water droplets symbol */}
          <path
            d="M 27 50 C 27 50 22 58 22 62 C 22 65 24 67 27 67 C 30 67 32 65 32 62 C 32 58 27 50 27 50 Z"
            className="fill-accent/90"
          />
        </g>

        {/* Schematic notation */}
        <text x="30" y="215" className="fill-text-dim font-mono text-[8px]">
          FIG 1.0 // CLOSED-LOOP IRRIGATION LOGIC // ESP32
        </text>
      </svg>
    </div>
  )
}

/**
 * AI Study Buddy Cover Visual:
 * Refined education-dashboard mock with a sidebar,
 * a chat/answer panel with abstract text lines,
 * a topic list, and progress-style cards.
 * Abstract shapes, strictly no fabricated numbers or metrics.
 */
export const AIStudyBuddyVisual: React.FC = () => {
  return (
    <div
      className="relative w-full h-full min-h-[220px] sm:min-h-[260px] bg-surface-2/80 rounded-lg p-4 flex items-center justify-center overflow-hidden border border-border"
      aria-label="AI Study Buddy application interface preview"
      role="img"
    >
      <div className="w-full max-w-[440px] rounded-lg border border-border-strong bg-surface overflow-hidden shadow-md flex flex-col">
        {/* Top bar with mock browser dots */}
        <div className="px-3 py-2 border-b border-border bg-surface-2 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-border-strong" />
            <span className="w-2 h-2 rounded-full bg-border-strong" />
            <span className="w-2 h-2 rounded-full bg-border-strong" />
          </div>
          <span className="font-mono text-[9px] text-text-dim">
            streamlit://study-buddy.local
          </span>
          <div className="w-8" />
        </div>

        {/* App Main Body: Sidebar + Main chat/study view */}
        <div className="grid grid-cols-12 min-h-[160px]">
          {/* Left Sidebar */}
          <div className="col-span-4 border-r border-border p-2.5 flex flex-col justify-between bg-surface/50">
            <div>
              <div className="font-mono text-[8px] text-accent uppercase tracking-wider mb-2 font-medium">
                // Topics
              </div>
              <div className="space-y-1.5">
                <div className="px-2 py-1 rounded bg-surface-2 border border-border flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <div className="h-2 w-12 bg-text-muted/60 rounded" />
                </div>
                <div className="px-2 py-1 rounded hover:bg-surface-2/50 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-border-strong" />
                  <div className="h-2 w-14 bg-text-dim/40 rounded" />
                </div>
                <div className="px-2 py-1 rounded hover:bg-surface-2/50 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-border-strong" />
                  <div className="h-2 w-10 bg-text-dim/40 rounded" />
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-border/60">
              <div className="h-1.5 w-16 bg-text-dim/30 rounded mb-1" />
              <div className="h-1.5 w-10 bg-text-dim/20 rounded" />
            </div>
          </div>

          {/* Right Main Panel: Question / Assistance interaction */}
          <div className="col-span-8 p-3 flex flex-col justify-between">
            {/* Assistant response block with abstract lines */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded bg-accent/20 border border-accent/40 flex items-center justify-center font-mono text-[8px] text-accent">
                  AI
                </span>
                <span className="font-mono text-[9px] text-text font-medium">Study Assistant</span>
              </div>

              <div className="p-2.5 rounded bg-surface-2 border border-border/80 space-y-1.5">
                <div className="h-2 w-full bg-text/50 rounded" />
                <div className="h-2 w-[85%] bg-text/40 rounded" />
                <div className="h-2 w-[65%] bg-text/30 rounded" />
              </div>
            </div>

            {/* Abstract Input box at bottom */}
            <div className="pt-2 mt-2 border-t border-border flex items-center justify-between">
              <div className="h-2.5 w-36 bg-text-dim/30 rounded" />
              <span className="font-mono text-[8px] text-accent px-1.5 py-0.5 rounded bg-surface-2 border border-border">
                Submit
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
