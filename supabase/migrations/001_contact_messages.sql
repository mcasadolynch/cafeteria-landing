-- Tabla para los mensajes del formulario de contacto.
create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null check (char_length(name) between 2 and 120),
  email text not null check (char_length(email) between 5 and 200 and email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  message text not null check (char_length(message) between 10 and 2000)
);

-- Seguridad: los visitantes solo pueden INSERTAR mensajes, nunca leerlos ni borrarlos.
alter table public.contact_messages enable row level security;

create policy "Visitantes pueden enviar mensajes"
  on public.contact_messages
  for insert
  to anon, authenticated
  with check (true);
