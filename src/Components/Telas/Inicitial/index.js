import React from "react";

import Box from "@mui/material/Box";

import "./index.css";
import SidebarHome from "../../SideBar";


function Inicitial() {
  return (
      <div>
      <SidebarHome />
        <div className="container">
          <Box  style={{ backgroundColor: "white", opacity: "0.5" }}
            sx={{
              width: 600,
              height: 400,
              backgroundImage:'url(/Img/Auditorio.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'fixed',
              backgroundRepeat: 'no-repeat',
              boxShadow: "4px 4px 4px 4px rgba(0, 0, 0, 0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            <p>Auditório</p>
          </Box>

          <Box  style={{ backgroundColor: "white", opacity: "0.5" }}
            sx={{
              width: 600,
              height: 400,
              backgroundImage:'url(/Img/sala-aula.jpeg)',
              backgroundSize: 'cover',
              backgroundPosition: 'fixed',
              backgroundRepeat: 'no-repeat',
              boxShadow: "4px 4px 4px 4px rgba(0, 0, 0, 0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            <p>Salas de Aula</p>
          </Box>

          <Box  style={{ backgroundColor: "white", opacity: "0.5" }}
            sx={{
              width: 600,
              height: 400,
              backgroundImage:'url(/Img/laboratorio.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'fixed',
              backgroundRepeat: 'no-repeat',
              boxShadow: "4px 4px 4px 4px rgba(0, 0, 0, 0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "5px",
              marginTop: "20px",
              cursor: "pointer",
            }}
            >
            <p>Laboratórios</p>
          </Box>

          <Box  style={{ backgroundColor: "white", opacity: "0.5" }}
            sx={{
              width: 600,
              height: 400,
              backgroundImage:'url(/Img/reuniao.jpg) ',
              backgroundSize: 'cover',
              backgroundPosition: 'fixed',
              backgroundRepeat: 'no-repeat',
              boxShadow: "4px 4px 4px 4px rgba(0, 0, 0, 0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "5px",
              marginTop: "20px",
              cursor: "pointer",
            }}
            >
              <p>Salas de Reunião</p>
          </Box>
        </div>
      </div>
  );
}
export default Inicitial;
