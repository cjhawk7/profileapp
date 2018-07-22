import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Registerauth from "./components/auth/Registerauth";
import Loginauth from "./components/auth/Loginauth";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/register" component={Registerauth} />
            <Route exact path="/login" component={Loginauth} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
