import './App.css';
import  React, {Component} from 'react';
import {BrowserRouter as Router,Route, Switch} from "react-router-dom"
import Login from './containers/Login/Login'
import Users from './containers/User/Users'



class App extends Component{ 
  render() {
  return (
    <div className="form" align="center">
      <Router>
        <Switch>
          <Route path="/" exact strict component={Login}/>
          <Route path="/Users" exact strict component={Users}/>
        </Switch>
      </Router>
    
    </div>
  );
}
}

export default App;
