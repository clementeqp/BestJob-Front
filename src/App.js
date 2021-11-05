import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { useEffect } from "react";

import Home from "./components/HomeList";
import Oferta from "./components/Oferta";
import Footer from "./components/pages/footer/Footer";
import NavBar from "./components/pages/navbar/NavBar";
import { keepTheme } from "./components/pages/toogle/themes.js";
import SearchBar from "./components/pages/searchbar/SearchBar";

function App() {
  useEffect(() => {
    keepTheme();
  });

  return (
    <div className="container-main">
      <BrowserRouter>
        <NavBar />
        <div className="container-main-content">
          <SearchBar />
          <Switch>
            <Route path={`/oferta/:id`}>
              <Oferta />
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
