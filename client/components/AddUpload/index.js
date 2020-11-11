import React, { useState, useEffect } from "react";
import { connect } from 'react-redux'

class AddUpload extends React.Component {
  constructor () {
    super ()
  }

  render() {
    return (
      <div>
        A user will be able to upload a recipe from a photo here
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

export default connect(mapState, mapDispatch)(AddUpload);
