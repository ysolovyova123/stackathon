import React, { useState, useEffect } from "react";
import { connect } from 'react-redux'

class Footer extends React.Component {
  constructor () {
    super ()
  }

  render() {
    return (
      <div id="footer">
        <hr></hr>
        About Us verbiage goes here
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

export default connect(mapState, mapDispatch)(Footer);
