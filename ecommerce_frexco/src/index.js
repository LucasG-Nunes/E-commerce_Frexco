import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/Index.css";
import App from "./App";
import { CarrinhoContextProvider } from "./Context/CarrinhoContext";
import { InputContextProvider } from "./Context/InputContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <InputContextProvider>
      <CarrinhoContextProvider>
        <App />
      </CarrinhoContextProvider>
    </InputContextProvider>
  </React.StrictMode>
);
