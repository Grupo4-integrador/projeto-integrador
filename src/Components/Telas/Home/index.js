import React from "react";
import TextField from '@mui/material/TextField';
import "./index.css";

function Home() {
    return (
    <div>
        <div class="login-title">
            <p>Sistemas de Reservas de Espaços</p>            
        </div>
        <div class="login-input">
            <TextField id="outlined-basic" label="Login" variant="outlined" />
            <TextField id="outlined-basic" label="Senha" variant="outlined" />

        </div>
    </div>
    );
};
export default Home;