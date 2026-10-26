import { BarraVolver } from "../components/Barravolver";
import { MenuDigital } from "../components/Menudigital";
import "../styles/Pagina.css";

/*
  Menú digital: https://tudominio.com/menu
  Se abre desde el botón "Menú digital" del Home. También sirve para un QR en las mesas.
*/
export const MenuPage = () => (
  <>
    <BarraVolver titulo="Menú digital" />
    <main className="df-pagina">
      <header className="df-pagina__cab">
        <h1>¿Qué se te antoja hoy?</h1>
        <p>Todos nuestros helados son de yogurt. Precios en pesos colombianos.</p>
      </header>
      <MenuDigital />
    </main>
  </>
);