import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { clearCurrentProfile } from "./actions/userActions";
import { Provider } from "react-redux";
import store from "./store";
import ProtectedRoute from "./components/common/ProtectedRoute";

import "./App.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Registerauth from "./components/auth/Registerauth";
import Loginauth from "./components/auth/Loginauth";
import Dashboard from "./components/dashboard/Dashboard";
import NewProf from "./components/create-profile/NewProf";

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    store.dispatch(clearCurrentProfile());
    window.location.href = "/login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <div className="container">
              <Route exact path="/register" component={Registerauth} />
              <Route exact path="/login" component={Loginauth} />
              <Switch>
                <ProtectedRoute exact path="/dashboard" component={Dashboard} />
                <ProtectedRoute
                  exact
                  path="/create-profile"
                  component={NewProf}
                />
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
