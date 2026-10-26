import { useEffect, useState } from 'react'
import { MeshGradient, Shader, SimplexNoise } from 'shaders/react'

function useReducedMotion() {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePreference = () => setReduced(mediaQuery.matches)
    updatePreference()
    mediaQuery.addEventListener('change', updatePreference)
    return () => mediaQuery.removeEventListener('change', updatePreference)
  }, [])

  return reduced
}

const LIGHT_STOPS = [
  { color: '#ffffff', position: 0 },
  { color: '#fbf8f0', position: 0.52 },
  { color: '#efd39b', position: 0.82 },
  { color: '#d89a35', position: 1 },
]

const DARK_STOPS = [
  { color: '#050505', position: 0 },
  { color: '#0b0906', position: 0.44 },
  { color: '#3a240d', position: 0.78 },
  { color: '#d79a3b', position: 1 },
]

export function HeroLight({ variant }) {
  const reducedMotion = useReducedMotion()
  const isDark = variant === 'dark'
  const [unavailable, setUnavailable] = useState(false)

  return (
    <div
      className={`hero-light hero-light--${variant}${unavailable ? ' is-fallback' : ''}`}
      aria-hidden="true"
    >
      {!unavailable && (
        <Shader
          className="hero-light-canvas"
          colorSpace="srgb"
          toneMapping="aces"
          disableTelemetry
          onUnavailable={() => setUnavailable(true)}
        >
          <MeshGradient
            stops={isDark ? DARK_STOPS : LIGHT_STOPS}
            colorSpace="oklab"
            count={4}
            smoothness={3.1}
            variation={0.16}
            swirl={0.12}
            drift={reducedMotion ? 0 : 0.16}
            wrapping={0.08}
            speed={reducedMotion ? 0 : 0.18}
            seed={17}
          />
          <SimplexNoise
            colorA={isDark ? '#d79a3b' : '#ffffff'}
            colorB={isDark ? '#050505' : '#d6aa59'}
            colorSpace="oklab"
            scale={1.4}
            balance={isDark ? -0.58 : 0.46}
            contrast={-0.8}
            speed={reducedMotion ? 0 : 0.08}
            seed={29}
            opacity={isDark ? 0.16 : 0.08}
            blendMode="softLight"
          />
        </Shader>
      )}
    </div>
  )
}

