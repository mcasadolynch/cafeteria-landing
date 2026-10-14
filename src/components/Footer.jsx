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
        <p className="footer-note">© {new Date().getFullYear()} {cafe.name}. Proyecto de práctica, cafetería ficticia.</p>      </div>
    </footer>
  )
}
