import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { ProSidebarProvider } from 'react-pro-sidebar';

ReactDOM.render(
  <React.StrictMode>
    <ProSidebarProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ProSidebarProvider>
  </React.StrictMode>,
  document.getElementById('root')
);