import React from "react";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import "./index.css";

function Home() {
  return (
    <div className="login-screen">
      <Grid
        container
        justifyContent="center"
        alignItems="center"
      >
        <Box
          sx={{
            width: 541,
            height: 575,
            backgroundColor: "#FFFFFF",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "column",
            alignContent: "space-between",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 40,
          }}
        >
          <p class="login-title">Sistemas de Reservas de Espaços</p>
          <TextField
            id="outlined-basic"
            label="Informe seu Login"
            variant="outlined"
            className="input-login"
            style={{ marginLeft: 30,marginBottom: 36, marginTop: 41, width: 465, height: 45 }}
          />
          <TextField
            id="outlined-basic"
            label="Informe sua Senha"
            variant="outlined"
            className="input-passowd"
            style={{ marginLeft: 30, width: 465, height: 45 }}
          />
          <Button
            variant="contained"
            style={{
              width: 465,
              height: 45,
              marginBottom: 36,
              marginTop: 36,
              marginLeft: 30,
              backgroundColor: "#01e78e",
            }}
          >
            Acessar
          </Button>
          <Button variant="outlined" style={{ width: 465, height: 45,marginLeft: 30 }}>
            Esqueci minha senha
          </Button>
        </Box>
      </Grid>
    </div>
  );
}
export default Home;
