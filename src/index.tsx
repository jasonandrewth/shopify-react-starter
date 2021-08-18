import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ShopProvider from "./context/shopContext";

// 1. import `ChakraProvider` component
import { ColorModeScript, ChakraProvider } from "@chakra-ui/react";

//2. import theme
import theme from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <ShopProvider>
        {/* <ColorModeScript initialColorMode={theme.config.initialColorMode} /> */}
        <App />
      </ShopProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
