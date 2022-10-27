import React from "react";

import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';



import Header from "../../Header";
import "./index.css";

function Inicitial() {
  return (
    <div>
      <Header />

      <div style={{ display: 'flex', height: '100%' }}>
      <Sidebar>
        <Menu>
          <MenuItem> Documentation</MenuItem>
          <MenuItem> Calendar</MenuItem>
          <MenuItem> E-commerce</MenuItem>
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
