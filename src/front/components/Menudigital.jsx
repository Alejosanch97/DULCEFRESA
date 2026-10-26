import { useEffect, useMemo, useState } from "react";
import { ProductoCard } from "../components/Productocard";
import { CATEGORIAS, PRODUCTOS, ADICIONES, formatoPrecio } from "../data/Menudulcefresa";
import { obtenerMenu } from "../services/fidelizacion";
import "../styles/MenuDigital.css";

/*
  Menú digital.
  Fuente de datos:
   1) Si en el panel admin (API /api/menu) ya cargaste productos, se usan esos.
   2) Si la API no tiene productos (o no responde), se usa src/front/data/menuDulceFresa.js
*/
export function useMenu() {
  const [menu, setMenu] = useState({ categorias: CATEGORIAS, productos: PRODUCTOS, adiciones: ADICIONES });

  useEffect(() => {
    let activo = true;
    obtenerMenu()
      .then((api) => {
        const total = api.categorias?.reduce((n, c) => n + c.productos.length, 0) || 0;
        if (!activo || total === 0) return;
        setMenu({
          categorias: api.categorias.map((c) => ({ id: String(c.id), nombre: c.nombre, icono: "fa-solid fa-ice-cream" })),
          productos: api.categorias.flatMap((c) =>
            c.productos.map((p) => ({
              id: p.id,
              categoria: String(c.id),
              nombre: p.nombre,
              descripcion: p.descripcion,
              precio: p.precio,
              imagen: p.imagen_url,
              destacado: p.destacado,
            }))
          ),
          adiciones: ADICIONES,
        });
      })
      .catch(() => {}); // sin API seguimos con el menú local
    return () => {
      activo = false;
    };
  }, []);

  return menu;
}

const quitarTildes = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

export const MenuDigital = () => {
  const { categorias, productos, adiciones } = useMenu();
  const [activa, setActiva] = useState("todos");
  const [busqueda, setBusqueda] = useState("");

  const filtrados = useMemo(() => {
    const q = quitarTildes(busqueda.trim());
    return productos.filter((p) => {
      const enCategoria = activa === "todos" || p.categoria === activa;
      const texto = quitarTildes([p.nombre, p.descripcion, ...(p.incluye || [])].join(" "));
      return enCategoria && (!q || texto.includes(q));
    });
  }, [productos, activa, busqueda]);

  // Agrupado por categoría cuando se ve "Todo"
  const grupos = useMemo(
    () =>
      categorias
        .map((c) => ({ ...c, productos: filtrados.filter((p) => p.categoria === c.id) }))
        .filter((g) => g.productos.length > 0),
    [categorias, filtrados]
  );

  return (
    <div className="df-menu">
      {/* Barra de categorías + buscador (se queda pegada arriba al hacer scroll) */}
      <div className="df-menu__barra">
        <div className="df-menu__chips" role="tablist" aria-label="Categorías del menú">
          <Chip activo={activa === "todos"} onClick={() => setActiva("todos")} icono="fa-solid fa-star">
            Todo
          </Chip>
          {categorias.map((c) => (
            <Chip key={c.id} activo={activa === c.id} onClick={() => setActiva(c.id)} icono={c.icono}>
              {c.nombre}
            </Chip>
          ))}
        </div>
        <label className="df-menu__buscar">
          <i className="fa-solid fa-magnifying-glass" aria-hidden="true" />
          <span className="df-sr">Buscar en el menú</span>
          <input
            type="search"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder="Busca: nutella, fresas, oreo..."
          />
        </label>
      </div>

      {filtrados.length === 0 && (
        <div className="df-menu__vacio">
          <i className="fa-solid fa-ice-cream" aria-hidden="true" />
          <p>No encontramos “{busqueda}”. ¡Pregúntanos en caja, seguro te lo preparamos!</p>
        </div>
      )}

      {grupos.map((g) => (
        <section key={g.id} className="df-menu__grupo" aria-labelledby={`cat-${g.id}`}>
          <h3 className="df-menu__cat" id={`cat-${g.id}`}>
            <i className={g.icono} aria-hidden="true" /> {g.nombre}
            <span>{g.productos.length}</span>
          </h3>
          <div className="df-menu__grid">
            {g.productos.map((p) => (
              <ProductoCard key={p.id} producto={p} />
            ))}
          </div>
        </section>
      ))}

      {adiciones?.length > 0 && (
        <aside className="df-menu__adiciones" aria-label="Adiciones">
          <h3>
            <i className="fa-solid fa-plus" aria-hidden="true" /> Adiciones
          </h3>
          <ul>
            {adiciones.map((a) => (
              <li key={a.nombre}>
                {a.nombre} <strong>{formatoPrecio(a.precio)}</strong>
              </li>
            ))}
          </ul>
        </aside>
      )}
    </div>
  );
};

const Chip = ({ activo, onClick, icono, children }) => (
  <button
    type="button"
    role="tab"
    aria-selected={activo}
    className={`df-chip ${activo ? "df-chip--activo" : ""}`}
    onClick={onClick}
  >
    <i className={icono} aria-hidden="true" /> {children}
  </button>
);