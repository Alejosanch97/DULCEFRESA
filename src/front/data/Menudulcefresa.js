/* ==========================================================================
   MENÚ DULCE FRESA  (transcrito de las pantallas de la heladería)

   📸 CÓMO PONER LAS FOTOS
   Opción A (recomendada): descarga la foto de Instagram, guárdala en
       /public/img/menu/   y escribe la ruta así:  imagen: "/img/menu/fresalado.jpg"
   Opción B: súbela a Cloudinary / Imgur / Supabase Storage y pega el link completo:
       imagen: "https://res.cloudinary.com/.../fresalado.jpg"
   ⚠️ No uses el link directo de Instagram (scontent...): esos links se vencen en días.

   Si dejas imagen: "" se muestra un fondo de marca con un ícono de helado.

   Campos:
     precio      -> un solo precio
     tamanos     -> varios tamaños  [{ nombre, precio, detalle? }]
     opciones    -> variaciones con precio propio (ej. Nutella / Kinder)
     incluye     -> lo que trae (se muestra como etiquetas)
     destacado   -> aparece en "Los favoritos"
     etiqueta    -> cinta de color: "Favorito", "Nuevo", "Temporada"...
   ========================================================================== */

export const CATEGORIAS = [
  { id: "fresas", nombre: "Fresas", icono: "fa-solid fa-heart" },
  { id: "yogurt", nombre: "Helado de yogurt", icono: "fa-solid fa-ice-cream" },
  { id: "wafles", nombre: "Bubble wafles", icono: "fa-solid fa-cookie" },
  { id: "malteadas", nombre: "Malteadas", icono: "fa-solid fa-blender" },
  { id: "granizados", nombre: "Granizados", icono: "fa-solid fa-glass-water" },
];

export const PRODUCTOS = [
  // ------------------------------------------------------------------ FRESAS
  {
    id: "fresas-con-crema",
    categoria: "fresas",
    nombre: "Fresas con crema",
    descripcion: "El clásico de la casa: fresas frescas bañadas en nuestra crema.",
    incluye: ["Fresas", "Crema de la casa", "1 topping", "1 salsa"],
    tamanos: [
      { nombre: "Mediana", precio: 14500 },
      { nombre: "Grande", precio: 17500 },
    ],
    imagen: "https://i.pinimg.com/736x/aa/e4/45/aae4456750e5946f49619854de6275a1.jpg", // ... aquí pega el link de la imagen
    destacado: true,
    etiqueta: "Favorito",
  },
  {
    id: "fresa-mix",
    categoria: "fresas",
    nombre: "Fresa Mix",
    descripcion: "Fresas, crema y chocolate derretido en el mismo vaso.",
    incluye: ["Chocolate derretido", "Fresas", "Crema de la casa", "1 topping", "1 salsa"],
    tamanos: [
      { nombre: "Mediana", precio: 16500 },
      { nombre: "Grande", precio: 21500 },
    ],
    imagen: "https://i.pinimg.com/736x/e8/d0/27/e8d02781f024765aec1cefae8cc52270.jpg", // ... aquí pega el link de la imagen
    destacado: true,
  },
  {
    id: "fresas-con-chocolate",
    categoria: "fresas",
    nombre: "Fresas con chocolate",
    descripcion: "Chocolate derretido negro, blanco o combinado.",
    incluye: ["Chocolate derretido", "1 topping"],
    precio: 15900,
    imagen: "https://i.pinimg.com/736x/ab/b3/a1/abb3a10e9e1805abc1c19765010b881a.jpg", // ... aquí pega el link de la imagen
  },
  {
    id: "tarro-cremoso",
    categoria: "fresas",
    nombre: "Tarro cremoso",
    descripcion: "Crema de la casa, queso, helado de yogurt y fruta. Para compartir (o no).",
    incluye: ["Crema de la casa", "Queso", "Helado de yogurt", "Frutas", "1 topping", "1 salsa"],
    tamanos: [
      { nombre: "Mediano", precio: 18900 },
      { nombre: "Grande", precio: 22900 },
    ],
    imagen: "https://i.pinimg.com/736x/05/13/80/05138056a98b12bbf9ea000760004767.jpg", // ... aquí pega el link de la imagen
    destacado: true,
    etiqueta: "Para compartir",
  },

  // ------------------------------------------------------- HELADO DE YOGURT
  {
    id: "fresalado",
    categoria: "yogurt",
    nombre: "Fresalado",
    descripcion: "Helado de yogurt con fresas, banano y chocolate derretido negro, blanco o combinado.",
    incluye: ["Helado de yogurt", "Fresas", "Banano", "1 topping"],
    opciones: [
      { nombre: "Chocolate derretido", precio: 14900 },
      { nombre: "Nutella", precio: 15900 },
      { nombre: "Kinder", precio: 17900 },
    ],
    imagen: "https://i.pinimg.com/736x/aa/db/8f/aadb8fa3191bd764d735980373f31d02.jpg", // ... aquí pega el link de la imagen
    destacado: true,
    etiqueta: "Favorito",
  },
  {
    id: "mega-cono",
    categoria: "yogurt",
    nombre: "Mega cono",
    descripcion: "Cono gigante de helado de yogurt con chocolate derretido y dos frutas.",
    incluye: ["Helado de yogurt", "Chocolate derretido", "2 frutas"],
    precio: 12500,
    imagen: "https://i.pinimg.com/736x/91/ce/4d/91ce4d41b8812cb7b0318d95a0817123.jpg", // ... aquí pega el link de la imagen
    destacado: true,
  },
  {
    id: "guanabanazo",
    categoria: "yogurt",
    nombre: "Guanabanazo",
    descripcion: "Helado de yogurt con guanábana y Oreo o Milo.",
    incluye: ["Helado de yogurt", "Guanábana", "Oreo o Milo", "1 topping", "1 salsa"],
    precio: 14900,
    imagen: "https://i.pinimg.com/736x/52/4f/ad/524fadc1d6b25bc15ba063f7b6af11f2.jpg", // ... aquí pega el link de la imagen
  },
  {
    id: "parfait",
    categoria: "yogurt",
    nombre: "Parfait",
    descripcion: "Capas de helado de yogurt, fruta y toppings.",
    incluye: ["3 frutas", "2 toppings", "1 salsa"],
    precio: 12900,
    imagen: "https://i.pinimg.com/736x/20/9a/f8/209af8aa8b69c145ab89905ecea487d9.jpg", // ... aquí pega el link de la imagen
  },
  {
    id: "tarrinas",
    categoria: "yogurt",
    nombre: "Tarrinas",
    descripcion: "Helado de yogurt a tu manera.",
    tamanos: [
      { nombre: "Pequeña", precio: 8900, detalle: "1 topping, 1 salsa" },
      { nombre: "Mediana", precio: 9900, detalle: "2 toppings, 1 salsa" },
      { nombre: "Grande", precio: 10900, detalle: "2 toppings, 1 fruta, 1 salsa" },
    ],
    imagen: "https://i.pinimg.com/736x/c9/46/f9/c946f9c78afd56545697743463c65b7f.jpg", // ... aquí pega el link de la imagen
  },
  {
    id: "sundae",
    categoria: "yogurt",
    nombre: "Sundae",
    descripcion: "Helado de yogurt con arequipe, frutos rojos, frutos amarillos o chocolate.",
    incluye: ["Arequipe", "Frutos rojos", "Frutos amarillos", "Chocolate"],
    precio: 7900,
    imagen: "https://i.pinimg.com/736x/3a/3c/30/3a3c3041b5564d66b577111f637dba4b.jpg", // ... aquí pega el link de la imagen
  },
  {
    id: "cono",
    categoria: "yogurt",
    nombre: "Cono",
    descripcion: "Cubierto con Oreo, Klim, Milo, Choco Krispis o maní.",
    opciones: [
      { nombre: "Sencillo", precio: 4500 },
      { nombre: "Cubierto", precio: 6000 },
    ],
    imagen: "https://i.pinimg.com/736x/a5/fe/ce/a5fecefb61b9b8adc6c8831ca0396725.jpg", // ... aquí pega el link de la imagen
  },

  // ----------------------------------------------------------- BUBBLE WAFLES
  {
    id: "bubble-wafle-crema",
    categoria: "wafles",
    nombre: "Bubble wafle con crema",
    descripcion: "Wafle de burbujas con Nutella o chocolate derretido y crema de la casa.",
    incluye: ["Nutella o chocolate", "Crema de la casa", "1 fruta", "1 topping"],
    precio: 16900,
    imagen: "https://i.pinimg.com/736x/fe/34/ef/fe34ef74f064095bda7ecee1fdb41606.jpg", // ... aquí pega el link de la imagen
    destacado: true,
  },
  {
    id: "bubble-wafle-yogurt",
    categoria: "wafles",
    nombre: "Bubble wafle con helado de yogurt",
    descripcion: "Wafle de burbujas relleno de helado de yogurt.",
    incluye: ["Helado de yogurt", "1 topping", "1 fruta", "1 salsa"],
    opciones: [
      { nombre: "Clásico", precio: 14900 },
      { nombre: "Con Nutella o chocolate", precio: 17900 },
    ],
    imagen: "https://i.pinimg.com/736x/ed/4f/08/ed4f089bb9d07d3ccbd117a9d9a53b88.jpg", // ... aquí pega el link de la imagen
  },

  // ---------------------------------------------------------------- MALTEADAS
  {
    id: "malteadas",
    categoria: "malteadas",
    nombre: "Malteadas con helado de yogurt",
    descripcion: "Elige tu sabor favorito.",
    incluye: ["Oreo", "Milo", "Brownie", "Flips", "Choco Krispis", "Frutos rojos"],
    precio: 15900,
    imagen: "https://i.pinimg.com/736x/43/69/48/4369482bb599d53269815bce299f952e.jpg", // ... aquí pega el link de la imagen
    destacado: true,
  },

  // --------------------------------------------------------------- GRANIZADOS
  {
    id: "granizado-maracumango",
    categoria: "granizados",
    nombre: "Granizado Maracumango",
    descripcion: "Maracuyá y mango con perlas explosivas, gomas, tajín y chamoy.",
    incluye: ["Maracuyá y mango", "Perlas explosivas", "Gomas agridulces", "Tajín y chamoy", "Bazukazo o gomas enchiladas"],
    precio: 15500,
    imagen: "https://i.pinimg.com/736x/51/6e/53/516e5315b8b2bf16245c2f675a569ff0.jpg", // ... aquí pega el link de la imagen
    destacado: true,
    etiqueta: "Picante",
  },
  {
    id: "granizado-yogurt",
    categoria: "granizados",
    nombre: "Granizado con yogurt helado",
    descripcion: "Granizado coronado con helado de yogurt.",
    incluye: ["Helado de yogurt", "1 topping", "1 salsa", "Perlas explosivas"],
    precio: 15500,
    imagen: "https://i.pinimg.com/736x/51/6e/53/516e5315b8b2bf16245c2f675a569ff0.jpg", // ... aquí pega el link de la imagen
  },
  {
    id: "granizado-gumy",
    categoria: "granizados",
    nombre: "Granizado Gumy",
    descripcion: "Granizado con gomas y salsa.",
    opciones: [
      { nombre: "Gumy (gomas y 1 salsa)", precio: 10000 },
      { nombre: "Sencillo", precio: 8000 },
    ],
    imagen: "https://i.pinimg.com/736x/51/6e/53/516e5315b8b2bf16245c2f675a569ff0.jpg", // ... aquí pega el link de la imagen
  },
];

export const ADICIONES = [
  { nombre: "Topping", precio: 2000 },
  { nombre: "Chocolate derretido", precio: 3000 },
  { nombre: "Crema de maní", precio: 3000 },
  { nombre: "Queso", precio: 3000 },
  { nombre: "Nutella", precio: 4000 },
  { nombre: "Helado de yogurt", precio: 5000 },
];

// Formato de pesos colombianos: 14500 -> "$14.500"
export const formatoPrecio = (valor) 
  valor == null ? "" : "$" + Number(valor).toLocaleString("es-CO", { maximumFractionDigits: 0 });

// Precio "desde" para mostrar en tarjetas pequeñas
export const precioDesde = (p) => {
  const lista = [p.precio, ...(p.tamanos || []).map((t) => t.precio), ...(p.opciones || []).map((o) => o.precio)]
    .filter((v) => v != null);
  return lista.length ? Math.min(...lista) : null;
};