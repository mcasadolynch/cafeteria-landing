import { createClient } from '@supabase/supabase-js'

// Este módulo se carga solo cuando alguien envía el formulario (import dinámico en Contact.jsx),
// así la librería de Supabase no retrasa la carga inicial de la página.
const url = import.meta.env.VITE_SUPABASE_URL
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = url && anonKey ? createClient(url, anonKey) : null
