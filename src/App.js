import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Components/Telas/Home";
import Inicitial from "./Components/Telas/Inicitial/index";
import FogetPassword from "./Components/Telas/Foget-password";
import Lab from "./Components/Telas/Laboratorio";
import ClassRoom from "./Components/Telas/SalaDeAula";
import Auditorio from "./Components/Telas/Auditorio";
import Meeting from "./Components/Telas/SalaDeReuniao";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Inicitial />} />
        <Route path="password-forgot" element={<FogetPassword />} />
        <Route path="/auditorio" element={<Auditorio />} />
        <Route path="/saladeaula" element={<ClassRoom />} />
        <Route path="/reuniao" element={<Meeting />} />
        <Route path="/laboratorio" element={<Lab />} />
      </Routes>
    </div>
  );
}

export default App;
