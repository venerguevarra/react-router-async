import React from 'react';
import user from './Api';
import { Link } from 'react-router-dom';

export default class UserList extends React.Component {
  state = {
    users: []
  }

  componentDidMount() {
    user.get()
      .then(res => {
        const users = res.data;
        this.setState({ users });
    })
  }

  render() {
    return (

      <div>
        <p>
        <table>
            {this.state.users.map(user =>
              <tr key={user.id}>
                <td><Link to={`/userInfo/${user.id}`}>{user.id}</Link></td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            )}
        </table>
        </p>
      </div>
    )
  }
};