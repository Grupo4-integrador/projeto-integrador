import React from "react";

import { TextField } from "@mui/material";
import { BiLogIn } from "react-icons/bi";
import Button from "@mui/material/Button";

import "./index.css";

function Home() {
  return (
    <div className="login-screen">
      <div className="cointainer">
      <div class="box">
      <p class="login-title">Login - Sistemas de Reservas de Espaços</p>
      <TextField
        id="outlined-basic"
        label="Informe seu Login"
        variant="outlined"
        className="input-login"
      />
      <TextField
        id="standard-password-input"
        label="Informe sua Senha"
        type="password"
        autoComplete="current-password"
        variant="outlined"
        className="input-passowd"
      />
      <Button
        variant="contained"
        style={{
          backgroundColor: "#01e78e",
        }}
      >
        <BiLogIn/> Acessar
      </Button>
      <Button
        variant="outlined"
        style={{ width: 465, height: 45, marginLeft: 30 }}
      >
        Esqueci minha senha
      </Button>
      </div>
      </div>
    </div>
  );
}
export default Home;
