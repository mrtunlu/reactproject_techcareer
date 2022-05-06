import React from "react";
import GlobalStyle from "./globalStyles";
import Home from "./pages/HomePage/Home";
import Services from "./pages/Services/Services";
import EnglishTo from "./pages/EnglishTo/EnglishTo";
import Products from "./pages/Products/Products";
import Login from './pages/Login/Login'
import Signin from './pages/Signin/Signin'
import Speakers from "./pages/Speakers/Speakers";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { Navbar, Footer } from "./components";
import { ProductContextProvider } from "./contexts/productContext";


function App() {
  return (
    <Router>
      <ProductContextProvider>
        <GlobalStyle />
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />                           
          <Route path="/products" component={Products} />
          <Route path="/englishTo" component={EnglishTo} />
          <Route path="/speakers" component={Speakers} />
          <Route path="/services" component={Services} />
          <Route path="/login" component={Login} />
          <Route path="/signin" component={Signin} />
        </Switch>
        <Footer />
      </ProductContextProvider>
    </Router>
  );
}

export default App;

