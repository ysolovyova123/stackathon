import React, { useState, useEffect } from "react";
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { getUser } from '../../store/user'

class SignIn extends React.Component {
  constructor () {
    super ()
    this.state = {
      email: "",
      password: "",
      loggedIn: false,
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange (e) {
    console.log('target is', e.target.name, 'value is', e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log(this.state)
  }

  async onSubmit (e) {
    e.preventDefault();
    console.log('current state in SignIn is: ',this.state)
    let {email, password} = this.state
    email = email.toLowerCase()
    this.props.getUser(email, password)
  }

  render() {
    const {user} = this.props
    if (user.email) {
      console.log('user in the store is now ', this.props.user)
      return (
        <h4>Welcome {this.props.user.email}, you are logged in</h4>
      )
    }

    else {
      return (
        <div id="signInContainer">
          <h1>Sign in here</h1>
          <form>
          Don't have an account? Register <Link to = "/signUp">here</Link>
          <p></p>
          Email:
          <input type="email" name="email" onChange={this.onChange} />
          <p></p>
          Password:
          <input type="password" name="password" onChange={this.onChange} />
          <p></p>
          <button type="submit" onClick={this.onSubmit}>Sign In</button>
          </form>
        </div>
      )
    }
  }
}

const mapState = state => (
  {
    user: state.user
  }
)

const mapDispatch = (dispatch) => {
    return {
      getUser: (email, password) => dispatch(getUser(email, password)),
    }
}

export default connect(mapState, mapDispatch)(SignIn);
