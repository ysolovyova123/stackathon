import React, { useState, useEffect } from "react";
import { connect } from 'react-redux'
import Tesseract from 'tesseract.js';
import { createWorker } from 'tesseract.js';
// import image from '../../../public/images/wakeupcat.png'
// const { createWorker } = require('tesseract.js')
//const tesseract = require("node-tesseract-ocr")
// const tesseract = require('node-tesseract')
// const PSM = require('tesseract.js/src/constants/PSM.js')
// const vision = require('@google-cloud/vision');

class AddUpload extends React.Component {
  constructor () {
    super ()
    this.state = {
      file: null,
      text: null
    }
    this.getTextFromImage = this.getTextFromImage.bind(this)
    this.fileSelected = this.fileSelected.bind(this)
  }

  componentDidMount() {
  }

  fileSelected (e) {
    this.setState ({
      file: e.target.files[0]
    })
  }

  async getTextFromImage() {

    const config = {
      lang: "eng",
    }

    Tesseract.recognize(this.state.file, config)
      .then(text => {
        console.log("Result:", text)
        this.setState ({
          text
        })
      })
      .catch(error => {
        console.log(error.message)
      })
  }


  render() {
    return (
      <div>
        A user will be able to upload a recipe from a photo here
        <p></p>
        <input type="file" onChange={this.fileSelected}></input>
        <button onClick={this.getTextFromImage}>Parse the text</button>
        <p></p>
        {this.state.text === null ? "Extract loading" : this.state.text.text}
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
