import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

/*
  Sin navbar ni footer: el Home funciona como linktree y las páginas internas
  (Menú, Videos, Sello) traen su propia <BarraVolver />.
  Si la URL trae #algo (ej. /menu#p-fresalado) baja hasta ese elemento;
  si no, sube al inicio al cambiar de página.
*/
export const Layout = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    const id = setTimeout(() => {
      document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);
    return () => clearTimeout(id);
  }, [pathname, hash]);

  return <Outlet />;
};