import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./Components/Telas/Home";
import Inicitial from "./Components/Telas/Inicitial";

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Home }  path="/"/>
           <Route component = { Inicitial }  path="/home" />
       </BrowserRouter>
   )
}

export default Routes;