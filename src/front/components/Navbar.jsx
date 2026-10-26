import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NEGOCIO } from "../data/Negociodulcefresa";
import "../styles/Navbar.css";

const ENLACES = [
  { href: "/#tarjeta", texto: "Mi tarjeta" },
  { href: "/#favoritos", texto: "Favoritos" },
  { href: "/#menu", texto: "Menú" },
  { href: "/#galeria", texto: "Galería" },
  { href: "/#visitanos", texto: "Visítanos" },
];

export const Logo = ({ claro = false }) =>
  NEGOCIO.logo ? (
    <img className="df-logo__img" src={NEGOCIO.logo} alt={`${NEGOCIO.nombre} ${NEGOCIO.subtitulo}`} />
  ) : (
    <span className={`df-logo ${claro ? "df-logo--claro" : ""}`}>
      <span className="df-logo__circulo" aria-hidden="true">
        <i className="fa-solid fa-ice-cream" />
      </span>
      <span className="df-logo__texto">
        {NEGOCIO.nombre}
        <small>{NEGOCIO.subtitulo}</small>
      </span>
    </span>
  );

export const Navbar = () => {
  const [abierto, setAbierto] = useState(false);
  const [conSombra, setConSombra] = useState(false);

  useEffect(() => {
    const alScroll = () => setConSombra(window.scrollY > 8);
    alScroll();
    window.addEventListener("scroll", alScroll, { passive: true });
    return () => window.removeEventListener("scroll", alScroll);
  }, []);

  const cerrar = () => setAbierto(false);

  return (
    <header className={`df-nav ${conSombra ? "df-nav--sombra" : ""} ${abierto ? "df-nav--abierto" : ""}`}>
      <nav className="df-contenedor df-nav__barra" aria-label="Principal">
        <Link to="/" className="df-nav__marca" onClick={cerrar} aria-label="Inicio Dulce Fresa">
          <Logo />
        </Link>

        <ul className="df-nav__enlaces" id="df-menu-movil">
          {ENLACES.map((e) => (
            <li key={e.href}>
              <a href={e.href} onClick={cerrar}>
                {e.texto}
              </a>
            </li>
          ))}
          <li className="df-nav__ig-movil">
            <a href={NEGOCIO.instagramUrl} target="_blank" rel="noreferrer" onClick={cerrar}>
              <i className="fa-brands fa-instagram" aria-hidden="true" /> @{NEGOCIO.instagram}
            </a>
          </li>
        </ul>

        <div className="df-nav__acciones">
          <a className="df-nav__ig" href={NEGOCIO.instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram">
            <i className="fa-brands fa-instagram" />
          </a>
          <a className="df-btn df-nav__cta" href="/#tarjeta" onClick={cerrar}>
            <i className="fa-solid fa-heart" aria-hidden="true" /> Mis fresas
          </a>
          <button
            type="button"
            className="df-nav__hamburguesa"
            aria-expanded={abierto}
            aria-controls="df-menu-movil"
            aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setAbierto((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
    </header>
  );
};