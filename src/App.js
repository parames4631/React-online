import React from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ProductPage from "./pages/ProductPage";
import ContactMe from "./pages/ContactMe";

function App() {
  return (
    <>
      <div>
        <Router>
        <NavBar />
        <Switch>
          <Route exact path='/'><HomePage /></Route>
          <Route exact path='/product'><ProductPage /></Route>
          <Route path='/about'><AboutPage /></Route>
          <Route path='/contactme'><ContactMe /></Route>
          <Route path="/detail/:id/title/:title"> <DetailPage/></Route>
           
          
        </Switch>
        <Footer />
        </Router>
        
      </div>

    </>
  );
}

export default App;
