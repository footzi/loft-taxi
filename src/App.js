import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { GlobalStyle } from "./globalStyles";
import { ContainerV } from "./components/Container";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Map from "./components/Map";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Switch>
          <Route
            path="/login"
            component={() => (
              <ContainerV>
                <Login />
              </ContainerV>
            )}
          />
          <PrivateRoute
            path="/profile"
            component={() => (
              <ContainerV>
                <Profile />
              </ContainerV>
            )}
          />
          <PrivateRoute path="/map" component={Map} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
