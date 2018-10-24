import React, { Component } from 'react';
import UserList from './UserList';
import UserRoutes from './UserRoutes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <UserList/>
          <UserRoutes/>
        </div>
      </div>
    );
  }
}

export default App;
