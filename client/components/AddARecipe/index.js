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
        <h3>You have 2 options to extract a recipe</h3>
        <div id="extractionMethods">
          <div id="extractFromUrl">
            1. Extract via a URL <p></p>
            <button class="extractURLButton" onClick={this.extractClicked}>Extract</button>
          </div>
          <div id="extractFromUpload">
            2. Upload a Photo <p></p>
            <button class="extractUploadButton" onClick={this.uploadClicked}>Upload</button>
          </div>
        </div>
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
