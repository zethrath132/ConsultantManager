import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import axios from '../../axios-base';

class AccountCreation extends Component {

  state = {
    signUpForm: {
      username: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false,
      },
      password: {
        elementType: 'input',
        elementConfig: {
          type: 'password'
        },
        value: "",
        validation: {
          required: true,
          minLength: 6,
          maxLength: 32
        },
        valid: false,
        touched: false
      },
      fName: {
        elementType: 'input',
        elementConfic: {
          type: 'text',
          placeholder:  'First Name'
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      lName: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder:  'Last Name'
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      roles: {
        elementType: 'input',
        elementConfig: {
          type: 'select',
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email'
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      phonenumber: {
        elementType: 'input',
        elementConfig: {
          type: 'tel'
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      }
    }
  }

  signUpHandler = (event) => {
    event.preventDefault();
    this.setState({loading: true});
    const formData = {};
    for(let formElementIdentifier in this.state.signUpForm)
    {
      formData{formElementIdentifier} = this.state.signUpForm[formElementIdentifier].value;
    }
    console.log(formData);
    userInstance.post( '/users/signup', formData )
  }
}
