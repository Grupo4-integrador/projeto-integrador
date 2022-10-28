import React from "react";



import "./index.css";
import SidebarHome from "../../SideBar";

function Inicitial() {
  return (
    <div>
      <SidebarHome />
      <div className="container">
        <div className="cima">
        <div className="box-auditorio">
          <p>Auditorio</p>
        </div>
        <div className="box-lab">
          <p>Laboratorios</p>
        </div>
        </div>
        <div className="baixo">
        <div className="box-class-room-small">
          <p>Salas de Aula pequena</p>
        </div>
        <div className="box-class-room">
          <p>Salas de Aula</p>
        </div>
        </div>
      </div>
    </div>
  );
}
export default Inicitial;
