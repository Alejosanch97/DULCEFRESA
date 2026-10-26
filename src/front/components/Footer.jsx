import { NEGOCIO } from "../data/Negociodulcefresa";
import { Logo } from "./Navbar";
import "../styles/Footer.css";

export const Footer = () => {
  const whatsappUrl = NEGOCIO.whatsapp
    ? `https://wa.me/${NEGOCIO.whatsapp}?text=${encodeURIComponent(NEGOCIO.mensajeWhatsapp)}`
    : null;

  return (
    <footer className="df-footer" id="visitanos">
      {/* gota de crema que "chorrea" sobre el footer */}
      <svg className="df-goteo df-footer__goteo" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
        <path
          fill="var(--df-crema)"
          d="M0 0H1440V28C1400 28 1392 62 1372 62S1348 28 1320 28H1180C1150 28 1146 74 1122 74S1096 28 1066 28H900C872 28 868 52 850 52S828 28 800 28H640C610 28 604 70 582 70S556 28 524 28H380C352 28 348 56 330 56S306 28 280 28H150C122 28 116 66 96 66S70 28 44 28H0Z"
        />
      </svg>

      <div className="df-contenedor df-footer__grid">
        <div className="df-footer__marca">
          <Logo claro />
          <p>{NEGOCIO.eslogan}</p>
          <div className="df-footer__redes">
            <a href={NEGOCIO.instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram">
              <i className="fa-brands fa-instagram" />
            </a>
            {whatsappUrl && (
              <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <i className="fa-brands fa-whatsapp" />
              </a>
            )}
          </div>
        </div>

        <div className="df-footer__bloque">
          <h3>
            <i className="fa-solid fa-location-dot" aria-hidden="true" /> Visítanos
          </h3>
          <p>
            {NEGOCIO.direccion || "Dirección por confirmar"}
            {NEGOCIO.ciudad && <><br />{NEGOCIO.ciudad}</>}
          </p>
          {NEGOCIO.mapsUrl && (
            <a className="df-footer__link" href={NEGOCIO.mapsUrl} target="_blank" rel="noreferrer">
              Cómo llegar <i className="fa-solid fa-arrow-right" aria-hidden="true" />
            </a>
          )}
        </div>

        <div className="df-footer__bloque">
          <h3>
            <i className="fa-regular fa-clock" aria-hidden="true" /> Horarios
          </h3>
          <ul>
            {NEGOCIO.horarios.map((h) => (
              <li key={h.dias}>
                <span>{h.dias}</span>
                <strong>{h.horas}</strong>
              </li>
            ))}
          </ul>
        </div>

        <div className="df-footer__bloque">
          <h3>
            <i className="fa-solid fa-heart" aria-hidden="true" /> Tu tarjeta
          </h3>
          <p>Cada compra suma una fresa. Completa tu tarjeta y gana premios.</p>
          <a className="df-btn df-btn--blanco" href="/#tarjeta">
            Ver mis fresas
          </a>
        </div>
      </div>

      <div className="df-contenedor df-footer__legal">
        <span>© {new Date().getFullYear()} {NEGOCIO.nombre} {NEGOCIO.subtitulo}</span>
        {/* ... aquí puedes poner tu crédito, ej: Hecho por Nébula Estudio */}
      </div>
    </footer>
  );
};