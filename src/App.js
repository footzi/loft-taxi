import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "./components/Header";
import { GlobalStyle } from "./globalStyles";
import Container from "./components/Container";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Map from "./components/Map";
import PrivateRoute from "./components/PrivateRoute";
import createStore from "./store";

const store = createStore();

const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <BrowserRouter>
      <Header />
      <Switch>
        <Route
          path="/login"
          component={() => (
            <Container>
              <Login />
            </Container>
          )}
        />
        <PrivateRoute
          path="/profile"
          component={() => (
            <Container>
              <Profile />
            </Container>
          )}
        />
        <PrivateRoute path="/map" component={Map} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default App;
