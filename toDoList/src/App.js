import React from 'react';
import Home from './View/Home'
import Task from './View/Task'
import AddTask from './View/AddTask'
import P404 from './View/P404'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/Task">
          <Task></Task>
        </Route>
        <Route exact path="/addTask">
          <AddTask></AddTask>
        </Route>
        <Route exact path="*">
          <P404></P404>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
