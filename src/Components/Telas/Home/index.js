import React from "react";

import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

import { BiLogIn } from "react-icons/bi";

import Logo from "../../../Img/logo.png";
import "./index.css";

const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 20,
  lineHeight: 1.5,
  backgroundColor: "#01e78e",
  borderColor: "#01e78e",
  fontFamily: ["sans-serif"].join(","),
  "&:hover": {
    backgroundColor: "#0069d9",
    borderColor: "#01e78e",
    boxShadow: "none",
  },
});

function Home() {
  return (
    <div className="login-screen">
      <div className="cointainer">
        <div className="box-white">
          <div class="box">
            <div class="img-logo">
              <img src={Logo} alt="Logo" width={509} height={90} />
            </div>

            <p class="login-title">Login - Sistemas de Reservas de Espaços</p>
            <div className="login-input">
              <TextField
                id="outlined-basic"
                label="Informe seu Login"
                variant="outlined"
                className="input-login"
                style={{
                  width: 465,
                  height: 45,
                  marginBottom: 15,
                  marginLeft: 25,
                  marginTop: 45,
                }}
              />
            </div>
            <div className="login-password">
              <TextField
                id="standard-password-input"
                label="Informe sua Senha"
                type="password"
                autoComplete="current-password"
                variant="outlined"
                className="input-passowd"
                style={{
                  width: 465,
                  height: 45,
                  marginBottom: 50,
                  marginLeft: 25,
                  marginTop: 15,
                }}
              />
            </div>
            <div className="button-login">
              <BootstrapButton
                variant="contained"
                style={{
                  width: 465,
                  height: 45,
                  marginBottom: 8,
                  marginLeft: 25,
                  marginTop: 15,
                }}
              >
                <BiLogIn style={{ fontSize: "24px",marginLeft: '-38px', marginRight: '20px'}} />
                Fazer Login
              </BootstrapButton>
            </div>
            <div className="button-forget">
              <Button
                variant="outlined"
                style={{
                  width: 465,
                  height: 45,
                  marginLeft: 25,
                  marginTop: 10,
                  marginBottom: 20,
                }}
              >
                Esqueci minha senha
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
