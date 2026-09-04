import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import '../../styles/loader.css'

const WORD = 'CHARIFUND'
const INTRO_MS = 2100
const EXIT_MS = 900
const ROUTE_MS = 420
const ROUTE_EXIT_MS = 560

export default function PageLoader() {
  const { pathname } = useLocation()
  const [ready, setReady] = useState(false)
  const [visible, setVisible] = useState(true)
  const [leaving, setLeaving] = useState(false)
  const [mode, setMode] = useState('intro')
  const skipFirstRoute = useRef(true)

  useEffect(() => {
    document.body.style.overflow = visible ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [visible])

  useEffect(() => {
    const hold = window.setTimeout(() => {
      setLeaving(true)
      window.setTimeout(() => {
        setVisible(false)
        setReady(true)
      }, EXIT_MS)
    }, INTRO_MS)

    return () => window.clearTimeout(hold)
  }, [])

  useEffect(() => {
    if (!ready) return undefined
    if (skipFirstRoute.current) {
      skipFirstRoute.current = false
      return undefined
    }

    setMode('route')
    setVisible(true)
    setLeaving(false)

    const hold = window.setTimeout(() => {
      setLeaving(true)
      window.setTimeout(() => setVisible(false), ROUTE_EXIT_MS)
    }, ROUTE_MS)

    return () => window.clearTimeout(hold)
  }, [pathname, ready])

  if (!visible) return null

  return (
    <div
      className={`page-loader ${leaving ? 'is-leaving' : ''} ${
        mode === 'route' ? 'page-loader--route' : ''
      }`}
      role="status"
      aria-live="polite"
      aria-label="Loading Charifund"
    >
      <div className="page-loader-panel page-loader-panel--top" />
      <div className="page-loader-panel page-loader-panel--bottom" />

      {mode === 'intro' ? (
        <div className="page-loader-core">
          <div className="flex flex-col items-center text-center">
            <span className="relative grid size-20 place-items-center">
              <svg className="absolute inset-0" viewBox="0 0 48 48" aria-hidden="true">
                <rect
                  className="page-loader-ring"
                  x="3"
                  y="3"
                  width="42"
                  height="42"
                  rx="2"
                />
              </svg>
              <span className="page-loader-mark font-display text-3xl font-extrabold text-secondary">
                C
              </span>
            </span>

            <p className="page-loader-word mt-6 font-serif text-2xl tracking-[0.22em] text-white sm:text-3xl">
              {WORD.split('').map((letter, index) => (
                <span key={`${letter}-${index}`} style={{ animationDelay: `${520 + index * 55}ms` }}>
                  {letter}
                </span>
              ))}
            </p>

            <span className="page-loader-line mt-5 block h-px w-24 bg-secondary" />
            <p className="page-loader-sub mt-4 text-[10px] font-bold uppercase text-white/55">
              Charitable Trust
            </p>
          </div>
        </div>
      ) : null}
    </div>
  )
}
