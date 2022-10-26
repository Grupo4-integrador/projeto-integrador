import React from "react";

import Header from "../../Header";
import "./index.css";

function Inicitial() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="box-auditorio">
          <p>Auditorio</p>
        </div>
        <div className="box-lab">
          <p>Laboratorios</p>
        </div>
        <div className="box-class-room-small">
          <p>Salas de Aula pequena</p>
        </div>
        <div className="box-class-room">
          <p>Salas de Aula</p>
        </div>
      </div>
    </div>
  );
}
export default Inicitial;
