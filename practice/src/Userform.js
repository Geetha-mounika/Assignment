import React, { Component } from 'react';
const regExp = RegExp(
  /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
)
const formValid = ({ isError, ...rest }) => {
  let isValid = false;

  Object.values(isError).forEach(val => {
      if (val.length > 0) {
          isValid = false
      } else {
          isValid = true
      }
  });

  Object.values(rest).forEach(val => {
      if (val === null) {
          isValid = false
      } else {
          isValid = true
      }
  });

  return isValid;
};

export default class Userform extends Component {
  constructor(props){
    super(props)
    this.state={
      name: '',
      email: '',
      password: '',
      isError: {
        name: '',
      email: '',
      password: '',

      }
    }
  }

  onSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
        console.log(this.state)
    } else {
        console.log("Form is invalid!");
    }
};


formValChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let isError = { ...this.state.isError };

    switch (name) {
        case "name":
            isError.name =
                value.length < 4 ? "Atleast 4 characaters required" : "";
            break;
        case "email":
            isError.email = regExp.test(value)
                ? ""
                : "Email address is invalid";
            break;
        case "password":
            isError.password =
                value.length < 6 ? "Atleast 6 characaters required" : "";
            break;
        default:
            break;
    }

    this.setState({
        isError,
        [name]: value
    })
};
  render() {
    return <div>

      <h3> React component form</h3>
      <form>
        <div className='Form-group'>
          <label>Name   </label> { }
          <input type='text' placeholder='Name'/>
        </div>
        <br/>
        <div className='Form-group'>
          <label>Email  </label>{ }
          <input type='text' placeholder='Email'/>
        </div>
        <br/>
        <div className='Form-group'>
          <label>Password  </label> { }
          <input type='text' placeholder='password'/>
        </div> 
        <br/>
        <button type='submit'>submit</button>

      </form>
        
    </div>;
  }
}
