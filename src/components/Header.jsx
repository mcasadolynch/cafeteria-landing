import { useState } from 'react'
import { cafe } from '../data.js'

const links = [
  { href: '#carta', label: 'Carta' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#visitanos', label: 'Horario' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <a href="#" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true">O</span>
          {cafe.name}
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="nav-principal"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Cerrar' : 'Menú'}
        </button>

        <nav id="nav-principal" className={`nav ${open ? 'is-open' : ''}`} aria-label="Principal">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
