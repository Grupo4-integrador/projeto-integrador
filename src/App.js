import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Components/Telas/Home";
import Inicitial from "./Components/Telas/Inicitial/index";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />

        <Route path="home" element={<Inicitial />} />
      </Routes>
    </div>
  );
}

export default App;
