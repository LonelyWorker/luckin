import React, { Component } from 'react';
import {HashRouter as Router,Route, NavLink, browserHistory} from 'react-router-dom';

import Index from './component/index';

class App extends Component {
  render() {
    return (
      <Router >
        <div className="App">
          {/*第一种:<Route />*/}
          {/* <Route component={Index}/> */}
          {/*第二种: Context*/}
          <Index/>
        </div>
      </Router>
    );
  }
}

export default App;
