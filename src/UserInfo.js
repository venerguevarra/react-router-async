import React from 'react';
import user from './Api';

export default class UserInfo extends React.Component {
  constructor() {
    super();

    this.state = {
        id: '',
        name: '',
        username: '',
        email: ''
    }
  }
  render() {
    user.get(this.props.match.params.id)
        .then(res => {
            const user = res.data;
            this.setState({
                id: user.id,
                name: user.name,
                username: user.username,
                email: user.email
            });
        });

    return (
      <div>
        <p>Id: {this.state.id}</p>
        <p>Name: {this.state.name}</p>
        <p>Username: {this.state.username}</p>
        <p>Email: {this.state.email}</p>
      </div>
    )
  }
};