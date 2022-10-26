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

function FogetPassword() {
  return (
    <div className="login-screen">
      <div className="cointainer">
        <div className="box-white">
          <div class="box">
            <div class="img-logo-forgot">
              <img src={Logo} alt="Logo" width={509} height={90} />
            </div>
            <p className="forgot-title">Recuperação de Senha</p>
            <div class="text-forgot">
            <p className="forgot-subtitle">Preencha o campo abaixo, para enviarmos um e-mail com a recuperação da sua senha</p>
            </div>
            <div className="login-input">
              <TextField
                id="outlined-basic"
                label="Informe seu E-mail"
                variant="outlined"
                className="input-login"
                style={{
                  width: 465,
                  height: 45,
                  marginBottom: 15,
                  marginLeft: 25,
                  marginTop: 0,
                }}
              />
            </div>
            <div className="button-forget">
             <Link style={{textDecoration: 'none'}} to="/"> 
             <BootstrapButton
                variant="contained"
                style={{
                  width: 465,
                  height: 45,
                  marginBottom: 70,
                  marginLeft: 25,
                  marginTop: 15,
                }}
              >
                <BiLogIn style={{ fontSize: "24px",marginLeft: '-38px', marginRight: '20px'}} />
                Recuperar Senha
              </BootstrapButton>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FogetPassword;
