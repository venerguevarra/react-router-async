import axios from 'axios';

const UserApi = axios.create({
  baseURL: `http://jsonplaceholder.typicode.com/users`
});

export default UserApi;

