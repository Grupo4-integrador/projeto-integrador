import React from "react";

import Box from "@mui/material/Box";
import { Link } from "react-router-dom";


import "./index.css";
import SidebarHome from "../../SideBar";


function Inicitial() {
  return (
      <div>
      <SidebarHome />
<<<<<<< HEAD
        <div className="container2">
        <Link style={{textDecoration: 'none', color:'black' }} to="/auditorio"> 
          <Box  style={{ backgroundColor: "white", opacity: "0.6" }}
            sx={{
              width: 500,
              height: 300,
              backgroundImage:'url(/Img/Auditorio.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'fixed',
              backgroundRepeat: 'no-repeat',
              boxShadow: "4px 4px 4px 4px rgba(0, 0, 0, 0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "5px",
              margin: "0px 20px 20px 20px",
              cursor: "pointer",
            }}
          >
            <p>Auditório</p>
          </Box>
          </Link>

          <Link style={{textDecoration: 'none', color:'black' }} to="/saladeaula"> 
          <Box  style={{ backgroundColor: "white", opacity: "0.6" }}
            sx={{
              width: 500,
              height: 300,
              backgroundImage:'url(/Img/sala-aula.jpeg)',
              backgroundSize: 'cover',
              backgroundPosition: 'fixed',
              backgroundRepeat: 'no-repeat',
              boxShadow: "4px 4px 4px 4px rgba(0, 0, 0, 0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "5px",
              margin: "0px 20px 20px 20px",
              cursor: "pointer",
            }}
          >
            <p>Salas de Aula</p>
          </Box>
          </Link>

          <Link style={{textDecoration: 'none', color:'black' }} to="/laboratorio"> 
          <Box  style={{ backgroundColor: "white", opacity: "0.6" }}
            sx={{
              width: 500,
              height: 300,
              backgroundImage:'url(/Img/laboratorio.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'fixed',
              backgroundRepeat: 'no-repeat',
              boxShadow: "4px 4px 4px 4px rgba(0, 0, 0, 0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "5px",
              margin: "0px 20px 20px 20px",
              cursor: "pointer",
            }}
            >
            <p>Laboratórios</p>
          </Box>
          </Link>

          <Link style={{textDecoration: 'none', color:'black' }} to="/reuniao"> 
          <Box  style={{ backgroundColor: "white", opacity: "0.6" }}
            sx={{
              width: 500,
              height: 300,
              backgroundImage:'url(/Img/reuniao.jpg) ',
              backgroundSize: 'cover',
              backgroundPosition: 'fixed',
              backgroundRepeat: 'no-repeat',
              boxShadow: "4px 4px 4px 4px rgba(0, 0, 0, 0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "5px",
              margin: "0px 20px 20px 20px",
              cursor: "pointer",
            }}
            >
              <p>Salas de Reunião</p>
          </Box>
          </Link>
=======
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
>>>>>>> 3ec886ae4306d89aba1ef372dd1b96e09b2acc6f
        </div>
      </div>
  );
}
export default Inicitial;
