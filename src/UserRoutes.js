import React from 'react';
import { Switch, Route } from 'react-router-dom';
import UserList from './UserList';
import UserInfo from './UserInfo';

const UserRoutes = () => (
    <main>
      <Switch>
        <Route path='/userList' component={UserList}/>
        <Route path='/userInfo/:id' component={UserInfo}/>
      </Switch>
    </main>
);

export default UserRoutes;
