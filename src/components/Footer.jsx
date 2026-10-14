import { cafe } from '../data.js'
import { LogoMark } from './Logo.jsx'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <p className="footer-brand">
          <LogoMark size={32} />
          {cafe.name}
        </p>
        <p>{cafe.address} · {cafe.city}</p>
        <p className="footer-note">© {new Date().getFullYear()} {cafe.name}. Proyecto de práctica, cafetería ficticia.</p>
        <p className="footer-note">
          Foto de portada:{' '}
          <a href="https://unsplash.com/@supa_95" target="_blank" rel="noopener noreferrer">Sebastian Schuppik</a>
          {' '}en{' '}
          <a href="https://unsplash.com/photos/tables-and-chairs-inside-building-H7xTpvBjJS4" target="_blank" rel="noopener noreferrer">Unsplash</a>
        </p>
      </div>
    </footer>
  )
}
