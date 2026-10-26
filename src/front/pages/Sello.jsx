import { useEffect, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { TarjetaFidelizacion } from "../components/Tarjetafidelizacion";
import { BarraVolver } from "../components/Barravolver";
import { useTarjeta } from "../hooks/useTarjeta";
import "../styles/Sello.css";

/*
  Página que abre el tag NFC:  https://tudominio.com/sello?t=CODIGO_DEL_TAG
  (la URL exacta la imprime el comando:  pipenv run flask crear-tag "Caja principal" --url-base https://tudominio.com)

  - Con tarjeta en el celular  -> suma el sello automáticamente
  - Sin tarjeta                -> formulario de registro (y la primera fresa va de regalo)
*/
export const Sello = () => {
  const [params] = useSearchParams();
  const tag = params.get("t");
  const t = useTarjeta();
  const [estado, setEstado] = useState("esperando"); // esperando | sellando | listo | cooldown | error
  const [mensaje, setMensaje] = useState("");
  const intentado = useRef(false); // evita doble sello (React StrictMode ejecuta los efectos dos veces)

  useEffect(() => {
    if (!tag || t.cargando || intentado.current) return;
    if (!t.datos) return; // sin tarjeta: se muestra el registro

    intentado.current = true;
    setEstado("sellando");
    t.sellar(tag)
      .then(() => setEstado("listo"))
      .catch((e) => {
        setMensaje(e.message);
        setEstado(e.codigo_error === "COOLDOWN" ? "cooldown" : "error");
      });
  }, [tag, t.cargando, t.datos, t]);

  // Registro desde esta página: la API ya sumó el primer sello
  useEffect(() => {
    if (t.selloNuevo && estado === "esperando") setEstado("listo");
  }, [t.selloNuevo, estado]);

  if (!tag) {
    return (
      <>
      <BarraVolver titulo="Mi tarjeta" />
      <main className="df-sello-pagina">
        <div className="df-sello-pagina__caja">
          <Encabezado icono="fa-solid fa-circle-question" titulo="Ups, falta el código del NFC" />
          <p className="df-sello-pagina__texto">
            Acerca de nuevo tu celular al NFC de la caja. Si el problema sigue, pídele ayuda a nuestro equipo.
          </p>
          <Link to="/" className="df-btn">Ir al inicio</Link>
        </div>
      </main>
      </>
    );
  }

  const sinTarjeta = !t.cargando && !t.datos;

  return (
    <>
    <BarraVolver titulo="Mi tarjeta" />
    <main className="df-sello-pagina">
      <div className="df-sello-pagina__caja">
        {sinTarjeta && (
          <Encabezado
            icono="fa-solid fa-hand-sparkles"
            titulo="¡Bienvenid@ a Dulce Fresa!"
            texto="Activa tu tarjeta y esta compra ya cuenta como tu primera fresa."
          />
        )}
        {(estado === "sellando" || (t.cargando && estado === "esperando")) && (
          <Encabezado icono="fa-solid fa-spinner fa-spin" titulo="Sumando tu fresa..." />
        )}
        {estado === "listo" && (
          <Encabezado
            icono="fa-solid fa-circle-check"
            titulo="¡+1 fresa!"
            texto={t.datos?.tarjeta.premio_disponible ? "¡Completaste tu tarjeta! 🎉" : "Gracias por tu compra 💕"}
            celebrar
          />
        )}
        {estado === "cooldown" && (
          <Encabezado icono="fa-solid fa-clock" titulo="Esta compra ya quedó registrada" texto={mensaje} />
        )}
        {estado === "error" && (
          <Encabezado icono="fa-solid fa-triangle-exclamation" titulo="No pudimos sumar tu fresa" texto={mensaje} />
        )}

        <TarjetaFidelizacion t={t} tag={tag} />

        <div className="df-sello-pagina__links">
          <Link to="/menu" className="df-btn df-btn--turquesa">
            <i className="fa-solid fa-ice-cream" aria-hidden="true" /> Ver el menú
          </Link>
          <Link to="/" className="df-link">Ir al inicio</Link>
        </div>
      </div>
    </main>
    </>
  );
};

const Encabezado = ({ icono, titulo, texto, celebrar = false }) => (
  <header className={`df-sello-pagina__encabezado ${celebrar ? "df-sello-pagina__encabezado--celebrar" : ""}`}>
    <span className="df-sello-pagina__icono">
      <i className={icono} aria-hidden="true" />
    </span>
    <h1>{titulo}</h1>
    {texto && <p>{texto}</p>}
  </header>
);