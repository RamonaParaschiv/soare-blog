import React, {Component} from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Origin from './views/Origin';
import SayHi from './views/SayHi';
import Dog from './views/Test-dog';
import "./App.css";

class App extends Component  {
  render() {
    return (
      <div className="App">
      <nav className="App-nav">
        <NavLink exact activeClassName="active-link" to="/">Origin</NavLink>
        <NavLink exact activeClassName="active-link" to="/sayhi">SayHi</NavLink>
        <NavLink exact activeClassName="active-link" to="/dog">Dog</NavLink>
      </nav>
        <Switch>
          <Route exact path="/" component={Origin}/>
          <Route exact path="/sayhi" component={SayHi}/>
          <Route exact path="/dog" render={() => <Dog name="Hamhau" />}/>
        </Switch>
      </div>
  )
}
}


export default App;
