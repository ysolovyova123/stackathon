import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { getUserRecipes, deleteRecipe } from '../../store/recipes'
// import ReactHtmlParser from 'react-html-parser';
import axios from "axios";

class RecipeBook extends React.Component {
  constructor(props) {
    super()
    // this.state = {
    //   userId
    // }
    this.deleteButtonClicked = this.deleteButtonClicked.bind(this);
  }

  deleteButtonClicked(e) {
    e.preventDefault();
    // console.log('id clicked on is: ',e.target.id)
    this.props.deleteRecipe(e.target.id)
  }

  componentDidMount() {
    this.props.getUserRecipes(this.props.user.id)
  }

  render () {
    if (!this.props.user.email) {
      return (
        <div id="recipeBook">
          <div id="notLoggedIn">
            You must be logged in to see your recipe book, please log in <Link to="/signIn">here</Link>
          </div>
        </div>
      )
    }
    else { // user is logged in
      if (this.props.recipes.length > 0) {
        const {recipes} = this.props
        return (
          <div id='recipeBook'>
            <div id="recipeBookHeader">
              <h1>Your Recipe Book</h1>
            </div>
            <div id='recipeBookContentContainer'>
              {recipes.map(recipe => {
                return (
                  <div id='singleRecipeInBook'>
                    <ul id="1">
                      <h3>Title: {recipe.title}</h3>
                      <br></br>
                      <img id="recipeBookImage" src={recipe.image}></img>
                      <p></p>
                      <li><b>Servings: </b>{recipe.servings}</li>
                      <li><b>Ready In Minutes: </b>{recipe.readyInMinutes}</li>
                      <p></p>
                      <li><b>Ingredients: </b>
                        {recipe.extendedIngredients.map(ingredient => {
                        return (
                        <ul id="2">
                          <li>{ingredient}</li>
                        </ul>)
                      })}
                      </li>
                      <p></p>
                      <li><b>Instructions: </b>{recipe.instructions}</li>
                      <li>Servings: {recipe.servings}</li>
                      <p></p>
                      <button class = "deleteRecipeButton" id={recipe.id} type="submit" onClick={this.deleteButtonClicked}>Delete</button>
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        )
      }
      else {
        return (
          <div id="recipeBook">
            <div id="noRecipesInBook">
              You currently don't have any recipes, upload or extract some to create your recipe book
            </div>
        </div>
        )
      }
    }
  }
}

const mapState = (state) => ({
  user: state.user,
  recipes: state.recipes
});

const mapDispatch = (dispatch) => ( {
  getUserRecipes: (userId) => dispatch(getUserRecipes(userId)),
  deleteRecipe: (recipeId) => dispatch(deleteRecipe(recipeId))
    // updateUser: (userId, userProfile) => dispatch(editProfile(userId, userProfile))
  }
)

export default connect(mapState, mapDispatch)(RecipeBook);
