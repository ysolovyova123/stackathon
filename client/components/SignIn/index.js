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
        <div id="signInLandingPage">
          <h3>Welcome {this.props.user.firstName}, you are logged in</h3>
          <img id="signInLandingImage" src="https://media3.giphy.com/media/Tg66m0Z6aK5ZbMaiyg/giphy.gif"></img>
        </div>
      )
    }

    else {
      return (
        <div id="signInContainer">
          <div id="signInForm">
            <h3>Sign in here</h3>
            <form>
            Don't have an account? Register <Link to = "/signUp">here</Link>
            <p></p>
            Email:
            <input type="email" name="email" onChange={this.onChange} />
            <p></p>
            Password:
            <input type="password" name="password" onChange={this.onChange} />
            <p></p>
            <button class="extractURLButton" type="submit" onClick={this.onSubmit}>Sign In</button>
            </form>
          </div>
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
