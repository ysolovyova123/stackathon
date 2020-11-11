import React from "react";
import { connect } from "react-redux";
import axios from "axios";

class RecipeBook extends React.Component {
  constructor(props) {
    super()
    this.state = {
      title: '',
      servings: '',
      image: '',
      instructions: '',
      analyzedInstructions: [],
      extendedIngredients: []
    }
    // this.clicked = this.clicked.bind(this)
    this.generatedRecipe = this.generatedRecipe.bind(this)
    this.imageUploaded = this.imageUploaded.bind(this)
    // this.onChange = this.onChange.bind(this)
  }

  componentDidMount() {
    // tbd
  }

  // onChange (e) {
  //   e.preventDefault();
  //   console.log(`new value for step ${e.target.id + 1} is ${e.target.value}`)
  //   this.setState({
  //     [e.target.name]: this.state.analyzedInstructions.map(instruction => {
  //       if (instruction.number === e.target.id) {
  //         return e.target.value
  //       } else {
  //         return instruction
  //       }
  //     })
  //   })
  // }

  async generatedRecipe(e) {

    let apiKey = '179162a815264406b6eee2d69abad1dd'

    // let params = {
    //   apiKey:'179162a815264406b6eee2d69abad1dd'
    // }

    let data = {
      title: "Cookies",
      // image: "https://joyfoodsunshine.com/wp-content/uploads/2016/01/best-chocolate-chip-cookies-recipe-ever-no-chilling-1.jpg",
      image: document.getElementById('recipe_image').value,
      ingredients: "1/4 cup sugar \n 1/2 tbsp flour \n 1/3 cup chocolate chip cookies",
      instructions: "1. Mix the batter \n 2. Cook the cookies",
      readyInMinutes: 25,
      servings: 2,
      mask: "diamondMask",
      backgroundImage: "background1",
      author: "Nestle",
      backgroundColor: "f2f2f2",
      fontColor: "808080",
      source: "www.foodnetwork.com"
    }

    let options = {
      headers: {"content-type": "multipart/form-data"},
    }

    let newRecipeCard = (await axios.post(`https://api.spoonacular.com/recipes/visualizeRecipe?apiKey=${apiKey}`, data, options))
    console.log(newRecipeCard)
    // this.setState({
    //   title: extract.title,
    //   servings: extract.servings,
    //   image: extract.image,
    //   instructions: extract.instructions,
    //   analyzedInstructions: extract.analyzedInstructions[0].steps,
    //   extendedIngredients: extract.extendedIngredients
    // })
    // console.log(this.state)
  }

  imageUploaded(e) {
    e.preventDefault();
    let uploadedImage = document.getElementById('recipe_image').value
    console.log(element.value)
  }

  render () {
    return (
      <div className = 'Home'>
        <h1>Generate a recipe card here</h1>
        <input type="file"
        id="recipe_image" name="my_recipe_image"
        accept="image/jpeg"></input>
        <button onClick={this.imageUploaded}>Test Upload</button>
        <button onClick={this.generatedRecipe}>Try me to generate a recipe card</button>
        {/* <p>
          <h3> Extracted Recipe: </h3>
        </p>
        <ul>
          <li>
          Title: <input id="title" value={this.state.title}></input>
          </li>
          <li>
            Servings: <input id="servings" value={this.state.servings}></input>
          </li>
          <h3>Ingredients</h3>
          {this.state.extendedIngredients.length === 0 ? "Loading" : this.state.extendedIngredients.map(ingredient => {
            return (
              <li>{ingredient.name}</li>
            )
          })}
          <h4>Instructions:</h4>
          {this.state.analyzedInstructions.length === 0 ? "Loading" : this.state.analyzedInstructions.map(instruction => {
            return (
              <li>{instruction.number}: <input name="analyzedInstructions" id={instruction.number-1} value={instruction.step} onChange={this.onChange}></input></li>
            )
          })}
          {/* <li>
            Instructions: {this.state.instructions}
          </li> */}
       {/* </div> </ul> */}
      </div>
    )
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

export default connect(mapState, mapDispatch)(RecipeBook);
