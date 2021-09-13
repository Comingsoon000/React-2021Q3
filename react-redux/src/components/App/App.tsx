import React from "react";
import { HashRouter, Route, Switch, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { About } from "../About/About";
import { Details } from "../Details/Details";
import { AppHeader } from "../Header/AppHeader";
import { Page404 } from "../Page404/Page404";
import { SearchBar } from "../SearchBar/SearchBar";
import "./App.css";

const Content = (): JSX.Element => {
  const location = useLocation();
  return (
    <TransitionGroup>
      <CSSTransition timeout={300} classNames="fade" key={location.key}>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/details/:id">
            <Details />
          </Route>
          <Route exact path="/">
            <SearchBar />
          </Route>
          <Route path="*">
            <Page404 />
          </Route>
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

export const App = (): JSX.Element => {
  return (
    <HashRouter>
      <AppHeader />
      <Content />
    </HashRouter>
  );
};
