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
| Se ve bien en móvil | Diseño *mobile-first*, menú plegable, botones de 48 px, sin scroll horizontal |
| El formulario envía | Validación en el navegador e inserción en Supabase; mensaje de confirmación al enviar |
| URL pública de previsualización | Desplegado en Vercel |

## Desarrollo local

Necesitas Node 18 o superior.

```bash
npm install
cp .env.example .env   # y rellena las dos variables
npm run dev            # abre http://localhost:5173
```

Otros comandos:

```bash
npm run build     # genera la versión de producción en dist/
npm run preview   # sirve dist/ en local para probarla
```

## Variables de entorno

| Variable | Dónde encontrarla |
| --- | --- |
| `VITE_SUPABASE_URL` | Supabase → Project Settings → API → Project URL |
| `VITE_SUPABASE_ANON_KEY` | Supabase → Project Settings → API → clave `anon` / publishable |

La clave `anon` es pública por diseño: la tabla tiene RLS activado y solo permite **insertar** mensajes, no leerlos.

## Base de datos

La migración está en `supabase/migrations/001_contact_messages.sql`. Los mensajes recibidos se ven en Supabase → Table Editor → `contact_messages`.

## Despliegue en Vercel

1. En [vercel.com](https://vercel.com), *Add New → Project* e importa este repositorio.
2. Vercel detecta Vite solo (build: `npm run build`, output: `dist`).
3. En *Environment Variables* añade `VITE_SUPABASE_URL` y `VITE_SUPABASE_ANON_KEY`.
4. *Deploy*. Cada push a una rama genera una URL de previsualización.

## Estructura

```
src/
  components/   Secciones de la página (Header, Hero, Menu, About, Visit, Contact, Footer)
  lib/          Cliente de Supabase
  data.js       Textos, carta y horario
  index.css     Estilos (mobile-first)
supabase/
  migrations/   SQL de la tabla de mensajes
```
