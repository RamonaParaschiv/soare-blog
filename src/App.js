import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import Origin from './views/Origin';
import SayHi from './views/SayHi';

class App extends Component  {
  render() {
    return (
      <div className="App">
        <Route path="/origin" component={Origin}/>
      </div>
  )
}
}


export default App;
