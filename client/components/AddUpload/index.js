import React, { useState, useEffect } from "react";
import { connect } from 'react-redux'
import Tesseract from 'tesseract.js';
import { createWorker } from 'tesseract.js';
// const { createWorker } = require('tesseract.js')
//const tesseract = require("node-tesseract-ocr")
// const tesseract = require('node-tesseract')
// const PSM = require('tesseract.js/src/constants/PSM.js')
// const vision = require('@google-cloud/vision');

class AddUpload extends React.Component {
  constructor () {
    super ()
    // this.state {
    //   labels
    // }
    this.getTextFromImage = this.getTextFromImage.bind(this)
  }

  componentDidMount() {
    this.getTextFromImage();
  }

  async getTextFromImage() {
    // const worker = createWorker({
    // logger: m => console.log(m)});
    // await worker.load();
    // await worker.loadLanguage('eng');
    // await worker.initialize('eng');
    const config = {
      lang: "eng",
      oem: 1,
      psm: 3,
    }

    Tesseract.recognize("https://tesseract.projectnaptha.com/img/eng_bw.png", config)
      .then(text => {
        console.log("Result:", text)
      })
      .catch(error => {
        console.log(error.message)
      })
    // await worker.terminate();

    // Tesseract.recognize(
    //   'https://tesseract.projectnaptha.com/img/eng_bw.png',
    //   'eng',
    //   { logger: m => console.log(m) }
    // ).then(({ data: { text } }) => {
    //   console.log(text);
    // })
    // const worker = createWorker()
    // await worker.load()
    // await worker.loadLanguage('eng')
    // await worker.initialize('eng')
    // await worker.setParameters({
    //   tessedit_pageseg_mode: PSM.AUTO,
    // })

    // const config = {
    //   lang: "eng",
    //   oem: 1,
    //   psm: 3,
    // }

    // tesseract.recognize('./lavacakes.jpg', config)
    // .then(text => {
    // console.log("Result:", text)})
    // .catch(error => {
    // console.log(error.message)
    // })

    // const { data: { text } } = await worker.recognize('./lavacakes.jpg');
    // await worker.terminate()
    // console.log(text)
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
