import React, { useEffect } from "react";

const Nosotros = () => {
  useEffect(() => {
    const clickear = () => {
      console.log("Click");
    };

    window.addEventListener("click", clickear);

    return () => {
      window.removeEventListener("click", clickear);
    };
  }, []);

  return (
    <div className="container">
      <h1 className="main-title">Nosotros</h1>
      <p>Componente para practica de Event Listener</p>
    </div>
  );
};

export default Nosotros;
