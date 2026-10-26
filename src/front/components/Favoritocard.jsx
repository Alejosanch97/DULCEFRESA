import { Link } from "react-router-dom";
import { formatoPrecio, precioDesde } from "../data/Menudulcefresa";
import "../styles/FavoritoCard.css";

/*
  Card alta estilo "últimas collabs" para los favoritos del Home.
  Al tocarla lleva al producto dentro del menú (/menu#p-id).
*/
export const FavoritoCard = ({ producto, categoria, indice = 0 }) => {
  const variantes = producto.tamanos || producto.opciones;
  const color = ["rosa", "turquesa", "amarillo"][indice % 3];

  return (
    <Link to={`/menu#p-${producto.id}`} className="df-fav">
      {producto.imagen ? (
        <img className="df-fav__foto" src={producto.imagen} alt={producto.nombre} loading="lazy" decoding="async" />
      ) : (
        <span className="df-fav__sin-foto" aria-hidden="true">
          <i className="fa-solid fa-ice-cream" />
        </span>
      )}

      {categoria && <span className={`df-fav__chip df-fav__chip--${color}`}>{categoria}</span>}
      <span className="df-fav__info">
        <strong>{producto.nombre}</strong>
        <span className="df-fav__precio">
          {variantes ? "desde " : ""}
          <b>{formatoPrecio(precioDesde(producto))}</b>
        </span>
        <span className="df-fav__ver">
          Ver en el menú <i className="fa-solid fa-arrow-right df-flecha" aria-hidden="true" />
        </span>
      </span>
    </Link>
  );
};