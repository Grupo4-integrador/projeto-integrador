import React from "react";
import { Link } from "react-router-dom";

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

const BootstrapButton2 = styled(Button)({
  textTransform: "none",
  fontSize: 18,
  lineHeight: 1.5,
  fontFamily: ["sans-serif"].join(",")
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
             <Link style={{textDecoration: 'none'}} to="/home"> 
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
                <BiLogIn style={{ fontSize: "30px",marginLeft: '-38px', marginRight: '20px'}} />
                Fazer Login
              </BootstrapButton>
              </Link>
            </div>
            <div className="button-forget">
             <Link style={{textDecoration: 'none'}} to="/password-forgot"> 
              <BootstrapButton2
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
              </BootstrapButton2>
             </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
