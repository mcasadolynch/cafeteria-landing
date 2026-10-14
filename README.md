# Del Olmo · Landing

Landing page de una cafetería de barrio (ficticia), hecha como encargo de práctica en Kodarvia.

**Web publicada:** https://cafeteria-landing-smoky.vercel.app

**Identidad:** paleta verde salvia, verde bosque, terracota, crema y madera clara; titulares en Newsreader y texto en Instrument Sans; logo propio (hoja de olmo en sello circular).

- **Stack:** React 18 + Vite 5
- **Formulario de contacto:** guarda los mensajes en Supabase (tabla `contact_messages`)
- **Despliegue:** Vercel, con una URL de previsualización por cada push

## Criterios de aceptación

| Criterio | Cómo se cumple |
| --- | --- |
| Se ve bien en móvil | Diseño *mobile-first*, menú plegable, botones de 48 px, sin scroll horizontal. Revisado en móvil real y en iPhone SE (DevTools). |
| El formulario envía | Validación en el navegador e inserción en Supabase; mensaje de confirmación al enviar. Probado con envíos reales en producción. |
| URL pública de previsualización | https://cafeteria-landing-smoky.vercel.app |

**Lighthouse (móvil):** Performance 99 · Accessibility 100 · Best Practices 100 · SEO 100.

## Cómo arrancar el proyecto

Necesitas Node 18 o superior.

```bash
git clone https://github.com/mcasadolynch/cafeteria-landing.git
cd cafeteria-landing
npm install
cp .env.example .env   # y rellena las dos variables (ver abajo)
npm run dev            # abre http://localhost:5173
```

Otros comandos:

```bash
npm run build     # genera la versión de producción en dist/
npm run preview   # sirve dist/ en local para probarla
```

Sin las variables de entorno la página funciona igual; solo el formulario muestra un aviso de que no está conectado.

### Variables de entorno

| Variable | Dónde encontrarla |
| --- | --- |
| `VITE_SUPABASE_URL` | Supabase → Project Settings → API → Project URL |
| `VITE_SUPABASE_ANON_KEY` | Supabase → Project Settings → API → clave `anon` / publishable |

La clave `anon` es pública por diseño: la tabla tiene RLS activado y solo permite **insertar** mensajes, no leerlos, modificarlos ni borrarlos.

## Qué está simulado

| Elemento | Estado |
| --- | --- |
| La cafetería Del Olmo, Lucía y Andrés, la dirección, el teléfono y el email | **Ficticios.** Es un encargo de práctica sin cliente real. |
| Carta, precios, horario y "Pizarra de hoy" | **Datos de ejemplo**, escritos a mano en `src/data.js` y `src/components/Hero.jsx`. |
| "Hoy abrimos de … a …" | **Real:** se calcula con el día de la semana del visitante a partir del horario de ejemplo. |
| Formulario de contacto | **Real:** los mensajes se guardan de verdad en Supabase. No se envía ningún email de aviso. |
| Botón "Cómo llegar" | Abre Google Maps con la dirección ficticia. |

## Cómo reiniciar los datos de ejemplo

**Textos, carta y horario:** se editan en `src/data.js` (y la pizarra en `src/components/Hero.jsx`). Para volver a los datos originales:

```bash
git checkout main -- src/data.js src/components/Hero.jsx
```

**Mensajes del formulario:** para vaciar la tabla, abre Supabase → *SQL Editor* y ejecuta:

```sql
truncate table public.contact_messages;
```

También se pueden borrar a mano desde *Table Editor* → `contact_messages` → seleccionar filas → *Delete*.

**Base de datos desde cero** (por ejemplo, en un proyecto Supabase nuevo): ejecuta en el *SQL Editor* el contenido de `supabase/migrations/001_contact_messages.sql`. Crea la tabla, sus validaciones y la regla de seguridad.

## Despliegue en Vercel

1. En [vercel.com](https://vercel.com), *Add New → Project* e importa este repositorio.
2. Vercel detecta Vite solo (build: `npm run build`, output: `dist`).
3. En *Environment Variables* añade `VITE_SUPABASE_URL` y `VITE_SUPABASE_ANON_KEY`.
4. *Deploy*. Cada push a una rama genera una URL de previsualización.

## Estructura

```
src/
  components/   Secciones de la página (Header, Hero, Menu, About, Visit, Contact, Footer, Logo)
  lib/          Cliente de Supabase (se carga solo al enviar el formulario)
  data.js       Textos, carta y horario de ejemplo
  index.css     Estilos (mobile-first)
supabase/
  migrations/   SQL de la tabla de mensajes
public/
  favicon.svg   Icono con el logo
```
