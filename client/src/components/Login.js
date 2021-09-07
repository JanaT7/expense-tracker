import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export class Login extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          email: "",
          password: "",
          jwt: ""
      };
  };

  inputChangeHandler = (event) => {
      this.setState({
          ...this.state,
          [event.target.name]: event.target.value
      });
  };

  submitHandler = (event) => {
      event.preventDefault();
      const user = {
          email: this.state.email,
          password: this.state.password
      }

      axios.post('/api/v1/user/create', { user })
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    };

render () {
    return (

<div>        
<div className= 'container' id='inputs'>
        <form onSubmit = {this.submitHandler}>
        <label>
          E-mail       
        </label>
          <input type="text" email="e-mail" onChange = {this.inputChangeHandler}/>
         <label>
          Password
          </label>
          <input type="password" password="password" onChange = {this.inputChangeHandler}/>
          <button className='button-green btn-block'>SIGN IN</button>
          </form>   
</div>

<div className="text-center">
Or if you have an account, <Link to="/register">Register</Link>
</div>
</div>

   )
} };

