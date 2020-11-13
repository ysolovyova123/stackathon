import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from 'react-router-dom';
import {addARecipe} from '../../store/recipe'
import axios from "axios";

class AddExtract extends React.Component {
  constructor(props) {
    super()
    this.state = {
      extract: null,
      userId: null
      // title: '',
      // servings: '',
      // image: '',
      // instructions: '',
      // analyzedInstructions: [],
      // extendedIngredients: []
    }
    this.extractedRecipe = this.extractedRecipe.bind(this)
    // this.onChange = this.onChange.bind(this)
    this.addRecipe = this.addRecipe.bind(this)
  }

  componentDidMount() {
    if (this.props.user.email) {
      this.setState({
        userId: this.props.user.id,
        recipeAdded: false
      })
    }
  }

  addRecipe (title, image, servings, readyInMinutes, sourceUrl, chefNotes, dishTypes, cuisines, extendedIngredients, instructions, analyzedInstructions, userId) {

    this.props.addARecipe(title, image, servings, readyInMinutes, sourceUrl, chefNotes, dishTypes, cuisines, extendedIngredients, instructions, analyzedInstructions,userId);
  }

  async extractedRecipe(e) {
    let params = {
      apiKey:'179162a815264406b6eee2d69abad1dd',
      url: document.getElementById('urlForRecipe').value,
      //'https://foodista.com/recipe/ZHK4KPB6/chocolate-crinkle-cookies',
      forceExtraction: false,
      analyze: false
    }

    let extract = (await axios.get('https://api.spoonacular.com/recipes/extract', {params} )).data
    console.log(extract)
    this.setState({
      extract,
      recipeAdded: true
    })
  }

  render () {
    let {extract} = this.state

    if (extract) {
      let {title, image, servings, readyInMinutes, sourceUrl, dishTypes, cuisines, extendedIngredients, instructions, analyzedInstructions} = extract

      let chefNotes = ''

      extendedIngredients = extendedIngredients.map(ingredient => ingredient.original)

      analyzedInstructions = analyzedInstructions[0].steps.map(step => step)

      return (
        <div className = 'Home'>
          {this.props.user.email ? <button id="addToRecipeBox" onClick={this.addRecipe(title, image, servings, readyInMinutes, sourceUrl, chefNotes, dishTypes, cuisines, extendedIngredients, instructions, analyzedInstructions, this.state.userId)}>Looks good? Add to your recipe box</button> : <Link to = "/signIn">Sign in to save this recipe</Link>}
          {/* {this.props.user.email ? <button id="addToRecipeBox" onClick={this.addRecipe(title, image, servings, readyInMinutes, sourceUrl, chefNotes, dishTypes, cuisines, extendedIngredients, instructions, analyzedInstructions, this.state.userId)}>Looks good? Add to your recipe box</button> : <Link to = "/signIn">Sign in to save this recipe</Link>} */}
          <h3> Extracted Recipe: </h3>
          <ul>
            <li>
            Title: {extract.title}
            </li>
            <li>
              Servings: {extract.servings}
            </li>
            <h3>Ingredients</h3>
            {extract.extendedIngredients.length === 0 ? "Loading" : extract.extendedIngredients.map(ingredient => {
              return (
                <li>{ingredient.original}</li>
              )
            })}
            <h4>Instructions:</h4>
            {extract.analyzedInstructions[0].steps.length === 0 ? "Loading" : extract.analyzedInstructions[0].steps.map(instruction => {
              return (
                <li>{instruction.number}: {instruction.step}</li>
              )
            })}
          </ul>
        </div>
      )
    }

    else {
      return (
        <div className = 'Home'>
          Put in the recipe url here: <input id="urlForRecipe"></input>
          <p></p>
          <button onClick={this.extractedRecipe}>Try me to extract a recipe</button>
        </div>
      )
    }
  }
}

const mapState = (state) => ({
  user: state.user
});

const mapDispatch = (dispatch) => ( {
  addARecipe: (title, image, servings, readyInMinutes, sourceUrl, chefNotes, dishTypes, cuisines, extendedIngredients, instructions, analyzedInstructions,userId) => dispatch(addARecipe(title, image, servings, readyInMinutes, sourceUrl, chefNotes, dishTypes, cuisines, extendedIngredients, instructions, analyzedInstructions,userId)),
  }
)

export default connect(mapState, mapDispatch)(AddExtract);
