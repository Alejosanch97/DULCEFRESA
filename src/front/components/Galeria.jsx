import { useEffect, useRef, useState } from "react";
import { GALERIA, NEGOCIO } from "../data/Negociodulcefresa";
import { obtenerContenido } from "../services/fidelizacion";
import "../styles/Galeria.css";

/*
  Galería de fotos y reels.
  Fuente: API /api/contenido?seccion=galeria (panel admin) y, si está vacía,
  la lista GALERIA de src/front/data/negocioDulceFresa.js
*/
export const Galeria = () => {
  const [items, setItems] = useState(GALERIA);

  useEffect(() => {
    obtenerContenido("galeria")
      .then((api) => {
        if (api.length) setItems(api.map((c) => ({ tipo: c.tipo, url: c.url, titulo: c.titulo })));
      })
      .catch(() => {});
  }, []);

  return (
    <div className="df-galeria">
      <div className="df-galeria__grid">
        {items.map((item, i) =>
          item.tipo === "video" ? (
            <VideoTile key={i} item={item} />
          ) : (
            <figure key={i} className="df-galeria__item">
              {item.url ? (
                <img src={item.url} alt={item.titulo || "Helado Dulce Fresa"} loading="lazy" decoding="async" />
              ) : (
                <Vacio icono="fa-solid fa-camera" texto="Foto" />
              )}
              {item.titulo && <figcaption>{item.titulo}</figcaption>}
            </figure>
          )
        )}
      </div>

      <a className="df-btn df-galeria__ig" href={NEGOCIO.instagramUrl} target="_blank" rel="noreferrer">
        <i className="fa-brands fa-instagram" aria-hidden="true" /> @{NEGOCIO.instagram}
      </a>
    </div>
  );
};

/* Video vertical: solo se reproduce cuando está en pantalla (ahorra datos) */
const VideoTile = ({ item }) => {
  const ref = useRef(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const obs = new IntersectionObserver(
      ([entrada]) => (entrada.isIntersecting ? video.play().catch(() => {}) : video.pause()),
      { threshold: 0.4 }
    );
    obs.observe(video);
    return () => obs.disconnect();
  }, [item.url]);

  return (
    <figure className="df-galeria__item df-galeria__item--video">
      {item.url ? (
        <video ref={ref} src={item.url} poster={item.poster || undefined} muted loop playsInline preload="metadata" />
      ) : (
        <Vacio icono="fa-solid fa-play" texto="Reel" />
      )}
      <span className="df-galeria__play" aria-hidden="true">
        <i className="fa-solid fa-play" />
      </span>
      {item.titulo && <figcaption>{item.titulo}</figcaption>}
    </figure>
  );
};

const Vacio = ({ icono, texto }) => (
  <div className="df-galeria__vacio">
    <i className={icono} aria-hidden="true" />
    <span>{texto}</span>
  </div>
);