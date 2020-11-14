import React, { useState, useEffect } from "react";
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import EditRecipe from '../EditRecipe'
import { addARecipe } from '../../store/recipe'
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
    console.log('target is: ', ev.target.name, 'and the value is: ', ev.target.value)
    if (ev.target.name === "ingredientsList") {
      let inputtedIngredients = ev.target.value.split(',')
      this.setState({
        extendedIngredients : inputtedIngredients
      })
    }
    if (ev.target.name === "instructionList") {
      let inputtedInstructions = ev.target.value.split('.')
      let tempInstructionsArr = [];
      for (let i=0; i<inputtedInstructions.length; i++) {
        let instrNumber = i+1;
        let instruction = inputtedInstructions[i]
        tempInstructionsArr.push({number: instrNumber, step: instruction})
      }
      this.setState({
        analyzedInstructions : tempInstructionsArr,
        instructions: ev.target.value
      })
    }
    else {
      this.setState({
        [ev.target.name]: ev.target.value
      })
    }
    console.log(this.state)
  }

  addRecipe () {
    let {title, image, servings, readyInMinutes, sourceUrl, chefNotes, dishTypes, cuisines, extendedIngredients, instructions, analyzedInstructions,userId} = this.state;

    readyInMinutes = Number(readyInMinutes)
    servings = Number(servings)

    this.props.addARecipe(title, image, servings, readyInMinutes, sourceUrl, chefNotes, [dishTypes], [cuisines], extendedIngredients, instructions, analyzedInstructions,userId)

    // window.location.href ='http://localhost:3000/'
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
      <div className = 'extractRecipeHome'>
        <h3>Select the file you'd like to upload </h3>
        <p></p>
        <input id="selectFile" type="file" onChange={this.fileSelected}></input>
        <p></p>
        <button class="extractURLButton" onClick={this.getTextFromImage}>Get the Recipe</button>
        <p></p>
        {this.state.text === null ? "Extract loading..." : <div id="singleRecipeInBook">{this.state.text.text}</div>}
        <hr></hr>
        {!this.props.user.email ? <h3><Link to = "/signIn">Sign in to save or edit this recipe</Link></h3> : this.state.text ? <EditRecipe {...this.state} change={this.changeState} addARecipe={this.addRecipe}/> : ''}
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
