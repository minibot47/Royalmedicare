'use client'

import { useTypewriter } from './hooks'

interface Line {
  text: string
  italic?: boolean
  delay?: number
  duration?: number
}

interface Props {
  lines: Line[]
  className?: string
  isHero?: boolean
}

export default function TypewriterHeading({ lines, className = '', isHero = false }: Props) {
  const { ref, triggered } = useTypewriter(0.3)

  return (
    <h2
      ref={ref as React.RefObject<HTMLHeadingElement>}
      className={`font-serif font-bold leading-tight ${className}`}
    >
      {lines.map((line, i) => (
        <span key={i} className="tw-wrap block overflow-hidden">
          <span
            className={`tw-line${isHero || triggered ? ' animate' : ''}`}
            style={{
              ['--tw-dur' as string]: `${line.duration ?? 1}s`,
              ['--tw-delay' as string]: `${line.delay ?? 0}s`,
            }}
          >
            {line.italic ? (
              <>
                {line.text.split('|').map((part, j) =>
                  j % 2 === 0 ? (
                    <span key={j}>{part}</span>
                  ) : (
                    <em key={j} className="italic text-olive">{part}</em>
                  )
                )}
              </>
            ) : (
              line.text
            )}
          </span>
        </span>
      ))}
    </h2>
  )
}
