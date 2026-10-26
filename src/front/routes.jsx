import { createBrowserRouter, createRoutesFromElements, Route, Link } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Sello } from "./pages/Sello";
import { MenuPage } from "./pages/Menupage";
import { VideosPage } from "./components/Videospage";

/*
  Rutas de DULCE FRESA
    /                -> Home tipo linktree: tarjeta + links + favoritos + Instagram + ubicación
    /menu            -> Menú digital
    /videos          -> Videos y fotos
    /sello?t=CODIGO  -> La abre el tag NFC: suma una fresa o pide registro
*/
const NoEncontrado = () => (
  <main className="df-pagina" style={{ textAlign: "center", paddingTop: 80 }}>
    <h1 className="df-titulo">Se nos derritió esta página</h1>
    <p className="df-subtitulo" style={{ margin: "0 auto 28px" }}>
      La dirección no existe, pero los helados sí.
    </p>
    <Link to="/" className="df-btn">Volver al inicio</Link>
  </main>
);

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<NoEncontrado />}>
      <Route index element={<Home />} />
      <Route path="menu" element={<MenuPage />} />
      <Route path="videos" element={<VideosPage />} />
      <Route path="sello" element={<Sello />} />
      <Route path="*" element={<NoEncontrado />} />
    </Route>
  )
);