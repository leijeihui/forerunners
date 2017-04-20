import React from 'react';
import axios from 'axios';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.handleSignup = this.handleSignup.bind(this);
  }

  handleSignup (e) {
    e.preventDefault();
    let outer = this;
    let signupInfo = {
      username: outer.refs.username.value,
      password: outer.refs.password.value
    };
    console.log(signupInfo);
    axios.post('/api/signup', signupInfo).then(data => {
      window.location.href = '/#/';
    }).catch(err => {
      console.log(err);
    });
  }


  render () {
    return (
      <div>
        <form>
          Username: <input type = "text" required ref = "username" /> <br />
          Password: <input type = "password" required ref = "password" /> <br />
          <button onClick={(e) => this.handleSignup(e)}>Signup</button>
        </form>
      </div>
    );
  }
}

export default Signup;