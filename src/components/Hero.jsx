import { cafe, hours } from '../data.js'

// Devuelve el horario de hoy, p. ej. "Hoy abrimos de 7:30 a 20:00"
function todayLabel(date = new Date()) {
  const day = date.getDay() === 0 ? 7 : date.getDay()
  const slot = hours.find((h) => h.dayNums.includes(day))
  return slot ? `Hoy abrimos de ${slot.from} a ${slot.to}` : 'Consulta nuestro horario'
}

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">{cafe.tagline}</p>
          <h1>
            Tu café de cada mañana, <em>a dos pasos de casa</em>.
          </h1>
          <p className="lead">
            Café recién tostado, tostadas de pan de masa madre y bollería que sale del horno a las siete.
            Ven a desayunar, a trabajar un rato o a charlar con los vecinos.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#carta">Ver la carta</a>
            <a className="btn btn-ghost" href="#contacto">Escríbenos</a>
          </div>
          <p className="today">
            <span className="dot" aria-hidden="true"></span>
            {todayLabel()}
          </p>
        </div>

        <div className="hero-card" aria-label="Pizarra del día">
          <p className="board-title">Pizarra de hoy</p>
          <ul className="board-list">
            <li><span>Café de filtro</span><span>Etiopía · Guji</span></li>
            <li><span>Dulce del día</span><span>Bizcocho de limón</span></li>
            <li><span>Para comer</span><span>Bocadillo de tortilla</span></li>
          </ul>
          <p className="board-foot">Desayuno de barrio · <strong>5,50 €</strong></p>
        </div>
      </div>
    </section>
  )
}
