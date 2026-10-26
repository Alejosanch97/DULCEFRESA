import { Link } from "react-router-dom";
import { NEGOCIO } from "../data/Negociodulcefresa";
import "../styles/BarraVolver.css";

/*
  Barra de arriba para las páginas internas (Menú, Videos, Sello).
  El Home NO lleva barra: funciona como un linktree.
*/
export const BarraVolver = ({ titulo }) => (
  <header className="df-barra">
    <Link to="/" className="df-barra__volver" aria-label="Volver al inicio">
      <i className="fa-solid fa-arrow-left" aria-hidden="true" />
    </Link>
    <span className="df-barra__titulo">{titulo}</span>
    <Link to="/" className="df-barra__logo" aria-label="Dulce Fresa">
      {NEGOCIO.logo ? <img src={NEGOCIO.logo} alt="" /> : <i className="fa-solid fa-ice-cream" aria-hidden="true" />}
    </Link>
  </header>
);