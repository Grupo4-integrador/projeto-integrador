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
          <p className="room-title">Auditorio</p>
        </div>
        <div className="box-lab">
          <p className="room-title">Laboratorios</p>
        </div>
        </div>
        <div className="baixo">
        <div className="box-class-room-small">
          <p className="room-title">Salas pequenas</p>
        </div>
        <div className="box-class-room">
          <p className="room-title">Salas de Aula</p>
        </div>
        </div>
      </div>
    </div>
  );
}
export default Inicitial;
