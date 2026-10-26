import "../styles/SelloFresa.css";

/*
  Sello en forma de fresa para la tarjeta.
  lleno     -> fresa a color (compra registrada)
  nuevo     -> anima la fresa (recién sumada)
  numero    -> número que se ve cuando el sello está vacío
  esPremio  -> último espacio: muestra un regalo mientras está vacío
*/
export const SelloFresa = ({ lleno = false, nuevo = false, numero, esPremio = false }) => {
  const clases = ["df-sello", lleno && "df-sello--lleno", nuevo && "df-sello--nuevo", esPremio && "df-sello--premio"]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={clases} aria-label={lleno ? `Sello ${numero} conseguido` : `Sello ${numero} pendiente`}>
      {!lleno && esPremio ? (
        <i className="fa-solid fa-gift df-sello__regalo" aria-hidden="true" />
      ) : (
        <svg viewBox="0 0 48 54" aria-hidden="true" className="df-sello__svg">
          {/* cuerpo */}
          <path
            className="df-sello__cuerpo"
            d="M24 51C11 45 4 34 4 24C4 16 10 12 24 12C38 12 44 16 44 24C44 34 37 45 24 51Z"
          />
          {lleno && (
            <>
              <ellipse cx="14" cy="23" rx="3.5" ry="6" fill="#fff" opacity=".35" />
              {[
                [15, 30], [24, 25], [33, 30], [19, 38], [29, 38], [24, 45], [36, 22], [24, 33],
              ].map(([x, y]) => (
                <ellipse key={`${x}-${y}`} cx={x} cy={y} rx="1.3" ry="2" fill="#ffe7a3" />
              ))}
            </>
          )}
          {/* hojas */}
          <path
            className="df-sello__hojas"
            d="M24 15C19 8 11 8 7 12C13 12 17 14 24 18C31 14 35 12 41 12C37 8 29 8 24 15Z"
          />
          <path className="df-sello__tallo" d="M23 4h2.4v11H23z" />
        </svg>
      )}
      {!lleno && !esPremio && <span className="df-sello__numero">{numero}</span>}
    </span>
  );
};