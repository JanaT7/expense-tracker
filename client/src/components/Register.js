import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export class Register extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          firstname: "",
          lastname: "",
          email: "",
          birthday: "",
          telephone: "",
          country: "",
          password: ""
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
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        email: this.state.email,
        birthday: this.state.birthday,
        telephone: this.state.telephone,
        country: this.state.country,
        password: this.state.password
    };
    console.log(user)
    axios.post('http://localhost:10005/api/v1/users', user )
        .then(res => {
            if (res.status===201) {
              alert("Succesfully registered")
            }
        })
        .catch(err => {
            console.log(err);
        });
};

   render () { 
     return (

<div>        
<div className= 'container' id='inputs'>
        <form>
        <label>
          First Name
<br/>
          <input type="text" name="firstname" onChange = {this.inputChangeHandler} />
        </label>

        <label>
          Last name
<br/>
          <input type="text" name="lastname" onChange = {this.inputChangeHandler}/>
        </label>

        <label>
          E-mail
<br/>
          <input type="text" name="email" onChange = {this.inputChangeHandler}/>
        </label>

        <label>
          Date of birth
<br/>
        <input type="text" name="birthday" onChange = {this.inputChangeHandler}/> 
        </label>

        <label>
          Telephone
<br/>
<input type="tel" id="phone" name="telephone" onChange = {this.inputChangeHandler}/>
        </label>

        <label>
          Country
<br/>
<input type="text" name="country" onChange = {this.inputChangeHandler}/>
        </label>

        <label>
          Password
<br/>
          <input type="password" name="password" pattern=".{8,}" title="Eight or more characters" onChange = {this.inputChangeHandler} />
        </label>

         <button className='button-register' onClick= {this.submitHandler}>REGISTER</button>
      </form>
   
</div>

Or if you already have an account, <Link to="/">Sign in</Link>

</div>

   )
}};
