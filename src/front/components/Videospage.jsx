import { BarraVolver } from "../components/Barravolver";
import { Galeria } from "../components/Galeria";
import "../styles/Pagina.css";

/*
  Videos y fotos: https://tudominio.com/videos
  Los links de los videos se pegan en src/front/data/negocioDulceFresa.js (GALERIA)
*/
export const VideosPage = () => (
  <>
    <BarraVolver titulo="Antojos en video" />
    <main className="df-pagina">
      <header className="df-pagina__cab">
        <h1>Directo de la heladería</h1>
        <p>Mira cómo preparamos tus favoritos y lo que está pasando en Dulce Fresa.</p>
      </header>
      <Galeria />
    </main>
  </>
);