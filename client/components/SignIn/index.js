import React, { useState, useEffect } from "react";
import { connect } from 'react-redux'

class SignIn extends React.Component {
  constructor () {
    super ()
  }

  render() {
    return (
      <div>
        Sign In component goes here
      </div>
    )
  }

}

const mapState = state => (
  {
    //user: state.user
  }
)

const mapDispatch = (dispatch) => {
    return {
      //logOutUser: () => dispatch({type: "LOG_OUT"})
    }
}

export default connect(mapState, mapDispatch)(SignIn);