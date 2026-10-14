// Logo de Del Olmo: una hoja de olmo (base asimétrica y nervios marcados) dentro de un sello circular.
export function LogoMark({ size = 40, className = '' }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="32" cy="32" r="31" fill="#3f4b3b" />
      <circle cx="32" cy="32" r="27" fill="none" stroke="#8fa68b" strokeWidth="1.2" strokeDasharray="2 3" />
      {/* Hoja: el lado izquierdo baja más que el derecho, como en la hoja real del olmo */}
      <path
        d="M31 49C21 46 15.5 37 17.5 27C19.5 18 26 12.5 34 10C40.5 16 46.5 23 46.5 32C46.5 41 40 47.5 31 49Z"
        fill="#8fa68b"
      />
      <path
        d="M31 49Q30.5 30 34 11M31 41L22.5 35.5M31 34L20.5 28M31.5 27L23.5 20.5M31.5 42L40.5 37M32 34.5L43 28.5M32.5 27L41 21"
        fill="none"
        stroke="#f6f1e7"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path d="M31 49L29.5 55" stroke="#e3a07f" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  )
}

export default function Logo({ size = 40 }) {
  return (
    <span className="logo">
      <LogoMark size={size} />
      <span className="logo-text">
        <span className="logo-name">Del Olmo</span>
        <span className="logo-sub">Café · desde 1998</span>
      </span>
    </span>
  )
}
