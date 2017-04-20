import React from 'react';
import axios from 'axios';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin (e) {
    e.preventDefault();
    let loginInfo = {
      username: this.refs.username.value,
      password: this.refs.password.value
    };
    axios.post('/api/login', loginInfo).then(data => {
      console.log(data);
      window.location.href = '/#/';
    }).catch(err => {
      console.error(err);
    });
  }

  render () {
    return (
      <div>
        <form>
          Username: <input type = "text" required ref = "username" /> <br />
          Password: <input type = "password" required ref = "password" /> <br />
          <button onClick = {(e) => this.handleLogin(e)}>Login</button>
        </form>
      </div>
    );
  }
}

export default Login;