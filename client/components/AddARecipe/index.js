import React, { useState, useEffect } from "react";
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class AddARecipe extends React.Component {
  constructor () {
    super ()
    this.extractClicked = this.extractClicked.bind(this)
    this.uploadClicked = this.uploadClicked.bind(this)
  }

  extractClicked (e) {
    this.props.history.push('/extract')
  }

  uploadClicked (e) {
    this.props.history.push('/upload')
  }

  render() {
    return (
      <div id="discover_container">
        1. Extract a recipe <button onClick={this.extractClicked}>Extract</button>
        <br></br>
        2. Upload a recipe <button onClick={this.uploadClicked}>Upload</button>
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

export default connect(mapState, mapDispatch)(AddARecipe);
