import { useState } from 'react'
import Logo from './Logo.jsx'

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
        <a href="#" className="brand" aria-label="Del Olmo, ir al inicio" onClick={() => setOpen(false)}>
          <Logo size={40} />
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
