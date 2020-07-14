import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar.jsx";
import Landing from "./components/layout/Landing.jsx";
import Login from "./components/auth/Login.jsx";
import Register from "./components/auth/Register.jsx";
// Redux
import { Provider } from "react-redux";
import store from "./store.jsx";
import Alert from "./components/layout/Alert.jsx";
import { loadUser } from "./actions/auth.jsx";
import setAuthToken from "./utils/setAuthToken.jsx";
import Dashboard from "./components/dashboard/Dashboard.jsx";
import PrivateRoute from "./components/routing/PrivateRoute.jsx";
import CreateProfile from "./components/profile-forms/CreateProfile.jsx";
import "./App.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <section className="container">
            <Alert />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute
                exact
                path="/create-profile"
                component={CreateProfile}
              />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
