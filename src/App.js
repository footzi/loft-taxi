import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Provider } from 'react-redux';
import { Header } from "./components/Header";
import { GlobalStyle } from "./globalStyles";
import { ContainerV } from "./components/Container";
import Login from "./components/Login";
import { Profile } from "./components/Profile";
import { Map } from "./components/Map";
import createStore from './store';

const store = createStore();

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Header />
      <BrowserRouter>
        <Route
          path="/login"
          component={() => (
            <ContainerV>
              <Login />
            </ContainerV>
          )}
        />
        <Route
          path="/profile"
          component={() => (
            <ContainerV>
              <Profile />
            </ContainerV>
          )}
        />
        <Route path="/map" component={Map} />
        {/* <Redirect to="/login" /> */}
      </BrowserRouter>
    </Provider>
  );
};

export default App;
