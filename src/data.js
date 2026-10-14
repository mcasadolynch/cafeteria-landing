// Contenido de la landing. Es un encargo de práctica: la cafetería es ficticia.

export const cafe = {
  name: 'Café Olmo',
  tagline: 'El café de la plaza, desde 1998',
  address: 'Plaza del Olmo, 4',
  city: '28004 Madrid',
  phone: '910 000 000',
  email: 'hola@cafeolmo.es',
}

export const menu = [
  {
    category: 'Cafés',
    items: [
      { name: 'Cortado', note: 'Espresso con un toque de leche', price: 1.6 },
      { name: 'Café con leche', note: 'Leche entera o de avena', price: 1.9 },
      { name: 'Flat white', note: 'Doble ristretto, leche texturizada', price: 2.6 },
      { name: 'Café de filtro', note: 'Origen del mes, en V60', price: 2.4 },
    ],
  },
  {
    category: 'Desayunos',
    items: [
      { name: 'Tostada con tomate', note: 'Pan de masa madre y aceite de oliva', price: 2.8 },
      { name: 'Tostada de aguacate', note: 'Con huevo poché', price: 5.2 },
      { name: 'Desayuno de barrio', note: 'Café, zumo de naranja y tostada', price: 5.5 },
    ],
  },
  {
    category: 'Del horno',
    items: [
      { name: 'Croissant de mantequilla', note: 'Horneado cada mañana', price: 1.8 },
      { name: 'Bizcocho de limón', note: 'La receta de la casa', price: 2.5 },
      { name: 'Tarta de queso', note: 'Porción', price: 4.2 },
    ],
  },
]

// 1 = lunes … 7 = domingo
export const hours = [
  { days: 'Lunes a viernes', from: '7:30', to: '20:00', dayNums: [1, 2, 3, 4, 5] },
  { days: 'Sábado', from: '8:30', to: '21:00', dayNums: [6] },
  { days: 'Domingo y festivos', from: '9:00', to: '14:30', dayNums: [7] },
]
