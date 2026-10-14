const facts = [
  { value: '1998', label: 'Abrimos en la plaza' },
  { value: '7:00', label: 'Sale la primera hornada' },
  { value: '2', label: 'Tostadores locales con los que trabajamos' },
]

export default function About() {
  return (
    <section id="nosotros" className="section section-alt">
      <div className="wrap about">
        <div className="about-copy">
          <p className="eyebrow">Nosotros</p>
          <h2>Una cafetería de las de antes, con el café de ahora</h2>
          <p>
            Del Olmo nació bajo el árbol que da nombre a la plaza, y de ahí también nuestra hoja. Somos Lucía y Andrés, y llevamos más de
            veinte años sirviendo cafés a los mismos vecinos y a los que van llegando.
          </p>
          <p>
            Compramos el grano a tostadores pequeños, hacemos la bollería aquí mismo y tenemos mesas con
            enchufe para quien quiera quedarse a trabajar.
          </p>
        </div>
        <dl className="facts">
          {facts.map((f) => (
            <div key={f.label} className="fact">
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
