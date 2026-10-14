import { useState } from 'react'
import { supabase, isSupabaseConfigured } from '../lib/supabase.js'

const empty = { name: '', email: '', message: '', website: '' }
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function validate(values) {
  const errors = {}
  if (values.name.trim().length < 2) errors.name = 'Escribe tu nombre.'
  if (!emailRe.test(values.email.trim())) errors.email = 'Escribe un email válido, por ejemplo nombre@correo.com.'
  if (values.message.trim().length < 10) errors.message = 'Cuéntanos un poco más (mínimo 10 caracteres).'
  if (values.message.length > 2000) errors.message = 'El mensaje no puede pasar de 2000 caracteres.'
  return errors
}

export default function Contact() {
  const [values, setValues] = useState(empty)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [serverError, setServerError] = useState('')

  function onChange(e) {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
  }

  async function onSubmit(e) {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length) return

    // Campo trampa: los bots lo rellenan, las personas no lo ven.
    if (values.website) {
      setStatus('sent')
      return
    }

    if (!isSupabaseConfigured) {
      setStatus('error')
      setServerError('El formulario aún no está conectado. Escríbenos a hola@cafeolmo.es.')
      return
    }

    setStatus('sending')
    setServerError('')
    const { error } = await supabase.from('contact_messages').insert({
      name: values.name.trim(),
      email: values.email.trim(),
      message: values.message.trim(),
    })

    if (error) {
      setStatus('error')
      setServerError('No se pudo enviar el mensaje. Revisa tu conexión e inténtalo de nuevo.')
      return
    }

    setStatus('sent')
    setValues(empty)
  }

  return (
    <section id="contacto" className="section section-dark">
      <div className="wrap contact">
        <div className="contact-copy">
          <p className="eyebrow">Contacto</p>
          <h2>¿Una reserva, un encargo o una pregunta?</h2>
          <p>
            Hacemos tartas por encargo y reservamos la mesa grande para grupos de hasta 10 personas.
            Escríbenos y te respondemos en menos de 24 horas.
          </p>
        </div>

        {status === 'sent' ? (
          <div className="form-success" role="status">
            <h3>Mensaje enviado</h3>
            <p>Gracias por escribirnos. Te responderemos pronto al email que nos has dejado.</p>
            <button type="button" className="btn btn-light" onClick={() => setStatus('idle')}>
              Enviar otro mensaje
            </button>
          </div>
        ) : (
          <form className="form" onSubmit={onSubmit} noValidate>
            <div className="field">
              <label htmlFor="name">Nombre</label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                value={values.name}
                onChange={onChange}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && <p id="name-error" className="field-error">{errors.name}</p>}
            </div>

            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                value={values.email}
                onChange={onChange}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && <p id="email-error" className="field-error">{errors.email}</p>}
            </div>

            <div className="field">
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={values.message}
                onChange={onChange}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message && <p id="message-error" className="field-error">{errors.message}</p>}
            </div>

            <div className="hp" aria-hidden="true">
              <label htmlFor="website">No rellenes este campo</label>
              <input id="website" name="website" type="text" tabIndex="-1" autoComplete="off" value={values.website} onChange={onChange} />
            </div>

            {status === 'error' && <p className="form-error" role="alert">{serverError}</p>}

            <button type="submit" className="btn btn-accent" disabled={status === 'sending'}>
              {status === 'sending' ? 'Enviando…' : 'Enviar mensaje'}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
