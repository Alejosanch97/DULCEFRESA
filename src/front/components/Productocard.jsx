import { formatoPrecio, precioDesde } from "../data/Menudulcefresa";
import "../styles/ProductoCard.css";

/*
  Card de producto.
  modo="menu"     -> card completa con ingredientes y todos los precios
  modo="favorito" -> card alta para el carrusel de "Los favoritos"
*/
export const ProductoCard = ({ producto, modo = "menu" }) => {
  const precios = producto.tamanos || producto.opciones;

  if (modo === "favorito") {
    return (
      <article className="df-pcard df-pcard--favorito">
        <FotoProducto producto={producto} />
        <div className="df-pcard__favorito-info">
          <h3 className="df-pcard__nombre">{producto.nombre}</h3>
          <span className="df-pcard__desde">
            {precios ? "desde " : ""}
            <strong>{formatoPrecio(precioDesde(producto))}</strong>
          </span>
        </div>
      </article>
    );
  }

  return (
    <article className="df-pcard" id={`p-${producto.id}`}>
      <FotoProducto producto={producto} />

      <div className="df-pcard__cuerpo">
        <h3 className="df-pcard__nombre">{producto.nombre}</h3>
        {producto.descripcion && <p className="df-pcard__desc">{producto.descripcion}</p>}

        {producto.incluye?.length > 0 && (
          <ul className="df-pcard__incluye" aria-label="Incluye">
            {producto.incluye.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}

        <div className="df-pcard__precios">
          {precios ? (
            precios.map((p) => (
              <div className="df-pcard__fila" key={p.nombre}>
                <span>
                  {p.nombre}
                  {p.detalle && <small>{p.detalle}</small>}
                </span>
                <span className="df-pcard__puntos" aria-hidden="true" />
                <strong>{formatoPrecio(p.precio)}</strong>
              </div>
            ))
          ) : (
            <strong className="df-pcard__precio">{formatoPrecio(producto.precio)}</strong>
          )}
        </div>
      </div>
    </article>
  );
};

/* Foto del producto o, si aún no hay foto, un fondo de marca con ícono */
const FotoProducto = ({ producto }) => (
  <div className="df-pcard__foto">
    {producto.imagen ? (
      <img src={producto.imagen} alt={producto.nombre} loading="lazy" decoding="async" />
    ) : (
      <div className="df-pcard__sin-foto" aria-hidden="true">
        <i className="fa-solid fa-ice-cream" />
      </div>
    )}
    {producto.etiqueta && <span className="df-pcard__etiqueta">{producto.etiqueta}</span>}
  </div>
);