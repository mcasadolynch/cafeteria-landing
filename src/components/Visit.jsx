import { cafe, hours } from '../data.js'

export default function Visit() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${cafe.address}, ${cafe.city}`)}`

  return (
    <section id="visitanos" className="section">
      <div className="wrap visit">
        <div>
          <p className="eyebrow">Visítanos</p>
          <h2>Horario</h2>
          <table className="hours">
            <tbody>
              {hours.map((h) => (
                <tr key={h.days}>
                  <th scope="row">{h.days}</th>
                  <td>{h.from} – {h.to}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="visit-card">
          <h3>Dónde estamos</h3>
          <address>
            {cafe.address}
            <br />
            {cafe.city}
          </address>
          <p className="visit-contact">
            Tel. {cafe.phone}
            <br />
            {cafe.email}
          </p>
          <a className="btn btn-ghost" href={mapsUrl} target="_blank" rel="noopener noreferrer">
            Cómo llegar
          </a>
        </div>
      </div>
    </section>
  )
}
