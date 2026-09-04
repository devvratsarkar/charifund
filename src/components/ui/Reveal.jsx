import { useInView } from '../../hooks/useInView'

export default function Reveal({
  as: Tag = 'div',
  variant = 'up',
  delay = 0,
  className = '',
  children,
  ...props
}) {
  const [ref, visible] = useInView()

  return (
    <Tag
      ref={ref}
      className={`cf-reveal cf-reveal--${variant} ${visible ? 'is-in' : ''} ${className}`}
      style={{ '--reveal-delay': `${delay}ms` }}
      {...props}
    >
      {children}
    </Tag>
  )
}
