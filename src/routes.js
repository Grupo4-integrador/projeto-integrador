import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./Components/Telas/Home";
import Inicitial from "./Components/Telas/Inicitial";
import Auditorio from "./Components/Telas/Auditorio";
import ClassRoom from "./Components/Telas/SalaDeAula";
import Meeting from "./Components/Telas/SalaDeReuniao";
import Lab from "./Components/Telas/Laboratorio";

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Home }  path="/"/>
           <Route component = { Inicitial }  path="/home" />
           <Route component = { Auditorio }  path="/auditorio" />
           <Route component = { ClassRoom }  path="/saladeaula" />
           <Route component = { Meeting }  path="/reuniao" />
           <Route component = { Lab }  path="/laboratorio" />
       </BrowserRouter>
   )
}

export default Routes;