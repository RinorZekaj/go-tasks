import React from "react";
import { Provider } from "react-redux";
import { Router, Route } from "react-router-dom";

import Dashboard from "./Dashboard";
import { store } from "../store";
import { history } from '../store/history'
import Navigation from "./Navigation";
import TaskDetail from "./TaskDetail";

function Main() {
  return (
    <Router history={history}>
      <Provider store={store}>
        <div>
          <Navigation />
          <Route exact path="/" component={Dashboard}/>
          <Route path="/task/:id" component={({match}) => (<TaskDetail match={match}/>)}/>
        </div>
      </Provider>
    </Router>
  );
}

export default Main;
