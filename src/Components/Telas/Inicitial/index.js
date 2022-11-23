import React from "react";

import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from "react-router-dom";



import Header from "../../Header";
import "./index.css";

function Inicitial() {
  return (
    <div>
      <Header />

      <div style={{ display: 'flex', height: '100%' }}>
      <Sidebar>
        <Menu>
          <MenuItem>Suas Reservas</MenuItem>
          <MenuItem>Editar Reservas</MenuItem>
          <MenuItem>Falar com secretaria</MenuItem>
          <MenuItem>Reportar um problema de Reserva</MenuItem>
          <MenuItem>Lista de Materiais</MenuItem>
          <MenuItem>Solicitar equipamento para aula</MenuItem>
          <MenuItem>Equipamentos utilizados na aula passada</MenuItem>
          <Link style={{ textDecoration: "none" }} to="/">
          <MenuItem>Sair do sistema</MenuItem>
          </Link>
        </Menu>
      </Sidebar>
    </div>

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
