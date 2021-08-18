import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

//Chakra

// import { ChakraProvider } from "@chakra-ui/react";
// import { ThemeProvider, theme, ColorModeProvider } from "@chakra-ui/core";

//Pages
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";

//Components
import Navigation from "./components/Navigation";
import Cart from "./components/Cart";
import NavMenu from "./components/NavMenu";
import Footer from "./components/Footer";

const App = () => {
  // const location = useLocation();
  return (
    <div className="Shopify-app">
      <Router>
        <Navigation />
        <Cart />
        <NavMenu />
        <AnimatePresence exitBeforeEnter initial={false}>
          {/* <Switch location={location} key={location.pathname}> */}
          <Switch>
            <Route path="/products/:handle">
              <ProductPage />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </AnimatePresence>
        <Footer></Footer>
      </Router>
    </div>
  );
};

export default App;
