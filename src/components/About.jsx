const facts = [
  { value: '1998', label: 'Abrimos en la plaza' },
  { value: '7:00', label: 'Sale la primera hornada' },
  { value: '2', label: 'Tostadores locales' },
]

// Foto: Sebastian Schuppik en Unsplash (licencia Unsplash). El navegador elige el tamaño según la pantalla.
const photo = 'https://images.unsplash.com/photo-1521917441209-e886f0404a7b?auto=format&fit=crop&q=70'

export default function About() {
  return (
    <section id="nosotros" className="section section-alt">
      <div className="wrap about">
        <div className="about-copy">
          <p className="eyebrow">Nosotros</p>
          <h2>Una cafetería de las de antes, con el café de ahora</h2>
          <p>
            Del Olmo nació bajo el árbol que da nombre a la plaza, y de ahí también nuestra hoja. Somos Lucía y
            Andrés, y llevamos más de veinte años sirviendo cafés a los mismos vecinos y a los que van llegando.
          </p>
          <p>
            Compramos el grano a tostadores pequeños, hacemos la bollería aquí mismo y tenemos mesas con
            enchufe para quien quiera quedarse a trabajar.
          </p>
          <dl className="facts">
            {facts.map((f) => (
              <div key={f.label} className="fact">
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <figure className="about-photo">
          <img
            src={`${photo}&w=900`}
            srcSet={`${photo}&w=600 600w, ${photo}&w=900 900w, ${photo}&w=1300 1300w`}
            sizes="(min-width: 900px) 45vw, 100vw"
            width="1300"
            height="867"
            loading="lazy"
            decoding="async"
            alt="Sala de la cafetería con mesas de madera, sillas y plantas junto a la ventana"
          />
        </figure>
      </div>
    </section>
  )
}
