import React, { useState, useEffect } from "react";
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import EditRecipe from '../EditRecipe'
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
      text: null,
      userId: null,
      title: '',
      image: '',
      servings: '',
      readyInMinutes: '',
      sourceUrl: '',
      chefNotes: '',
      dishTypes: '',
      cuisines: '',
      extendedIngredients: '',
      instructions: '',
      analyzedInstructions: ''
    }
    this.getTextFromImage = this.getTextFromImage.bind(this)
    this.fileSelected = this.fileSelected.bind(this)
    this.addRecipe = this.addRecipe.bind(this)
    this.changeState = this.changeState.bind(this)
  }

  componentDidMount() {
    if (this.props.user.email) {
      this.setState({
        userId: this.props.user.id
      })
    }
  }

  changeState(ev){
    this.setState({[ev.target.name]:ev.target.value})
  }

  addRecipe (title, image, servings, readyInMinutes, sourceUrl, chefNotes, dishTypes, cuisines, extendedIngredients, instructions, analyzedInstructions, userId) {
    this.props.addARecipe(title, image, servings, readyInMinutes, sourceUrl, chefNotes, dishTypes, cuisines, extendedIngredients, instructions, analyzedInstructions,userId)
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
        <hr></hr>
        {this.props.user.email ? <EditRecipe {...this.state} change={this.changeState}/> : <Link to = "/signIn">Sign in to save this recipe</Link>}
      </div>
    )
  }

}

const mapState = (state) => ({
  user: state.user
});

const mapDispatch = (dispatch) => ( {
  addARecipe: (title, image, servings, readyInMinutes, sourceUrl, chefNotes, dishTypes, cuisines, extendedIngredients, instructions, analyzedInstructions,userId) => dispatch(addARecipe(title, image, servings, readyInMinutes, sourceUrl, chefNotes, dishTypes, cuisines, extendedIngredients, instructions, analyzedInstructions,userId)),
  }
)

export default connect(mapState, mapDispatch)(AddUpload);
