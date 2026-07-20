import { useEffect } from 'react'

export function CustomCursor() {
  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const cursor = document.documentElement
    const move = (event: MouseEvent) => { cursor.style.setProperty('--cursor-x', `${event.clientX}px`); cursor.style.setProperty('--cursor-y', `${event.clientY}px`) }
    const enter = () => cursor.classList.add('cursor-interactive')
    const leave = () => cursor.classList.remove('cursor-interactive')
    const targets = document.querySelectorAll<HTMLElement>('a, button, input, textarea')
    window.addEventListener('mousemove', move, { passive: true })
    targets.forEach(target => { target.addEventListener('mouseenter', enter); target.addEventListener('mouseleave', leave) })
    cursor.classList.add('has-custom-cursor')
    return () => { window.removeEventListener('mousemove', move); targets.forEach(target => { target.removeEventListener('mouseenter', enter); target.removeEventListener('mouseleave', leave) }); cursor.classList.remove('has-custom-cursor', 'cursor-interactive') }
  }, [])
  return <><span className="cursor-dot" aria-hidden="true" /><span className="cursor-ring" aria-hidden="true" /><span className="mouse-glow" aria-hidden="true" /></>
}
