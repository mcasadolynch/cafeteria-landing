import { menu } from '../data.js'

const euro = new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' })

export default function Menu() {
  return (
    <section id="carta" className="section">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">La carta</p>
          <h2>Lo de siempre, bien hecho</h2>
          <p className="section-sub">Precios con IVA incluido. Leche de avena sin coste extra.</p>
        </div>

        <div className="menu-grid">
          {menu.map((group) => (
            <div key={group.category} className="menu-group">
              <h3>{group.category}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item.name} className="menu-item">
                    <div className="menu-item-text">
                      <span className="menu-item-name">{item.name}</span>
                      <span className="menu-item-note">{item.note}</span>
                    </div>
                    <span className="menu-item-price">{euro.format(item.price)}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
