import React from "react";
import { connect } from "react-redux";
import axios from "axios";

class AddExtract extends React.Component {
  constructor(props) {
    super()
    this.state = {
      extract: null,
      // title: '',
      // servings: '',
      // image: '',
      // instructions: '',
      // analyzedInstructions: [],
      // extendedIngredients: []
    }
    this.extractedRecipe = this.extractedRecipe.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  componentDidMount() {
    // tbd
  }

  onChange (e) {
    e.preventDefault();
    console.log(`new value for step ${e.target.id + 1} is ${e.target.value}`)
    this.setState({
      [e.target.name]: this.state.analyzedInstructions.map(instruction => {
        if (instruction.number === e.target.id) {
          return e.target.value
        } else {
          return instruction
        }
      })
    })
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
      extract
      // title: extract.title,
      // servings: extract.servings,
      // image: extract.image,
      // instructions: extract.instructions,
      // analyzedInstructions: extract.analyzedInstructions[0].steps,
      // extendedIngredients: extract.extendedIngredients
    })
  }

  render () {
    const {extract} = this.state
    if (extract) {
      return (
        <div className = 'Home'>
          Put in the recipe url here: <input id="urlForRecipe"></input>
          <p></p>
          <button onClick={this.extractedRecipe}>Try me to extract a recipe</button>
          <p>
            <h3> Extracted Recipe: </h3>
          </p>
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
  //user: state.user
});

const mapDispatch = (dispatch) => ( {
    // deleteUser: (userId) => dispatch(deleteUser(userId)),
    // updateUser: (userId, userProfile) => dispatch(editProfile(userId, userProfile))
  }
)

export default connect(mapState, mapDispatch)(AddExtract);
