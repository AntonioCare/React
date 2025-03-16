import { useState } from "react";
export default function Semaforo() {
  const luci = ["rosso", "giallo", "verde"];
  const [coloreAttivo, setColoreAttivo] = useState(0);
  function handleCambioColore() {
    const intervallo = setInterval(
      () => {
        setColoreAttivo((prev) => (prev < luci.length ? prev + 1 : 0));
      },
      coloreAttivo === 0 ? 3000 : coloreAttivo === 1 ? 1000 : 5000
    );
    setTimeout(() => {
      clearInterval(intervallo);
    }, 9000);
    // setColoreAttivo(
    //   coloreAttivo === 0
    //     ? 1
    //     : coloreAttivo === 1
    //     ? 2
    //     : coloreAttivo === 2
    //     ? 0
    //     : 0
    // );
  }
  return (
    <>
      <div className="container">
        {luci.map((x, index) => (
          <div className="container-luce">
            <div
              className="luce"
              key={index}
              style={{
                backgroundColor:
                  coloreAttivo === index
                    ? x === "rosso"
                      ? "red"
                      : x === "giallo"
                      ? "yellow"
                      : "green"
                    : "gray",
              }}
            ></div>
            <p>{x}</p>
          </div>
        ))}
      </div>
      <button className="button" onClick={handleCambioColore}>
        Cliccami!
      </button>
    </>
  );
}
