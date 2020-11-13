import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { getUserRecipes } from '../../store/recipes'
// import ReactHtmlParser from 'react-html-parser';
import axios from "axios";

class RecipeBook extends React.Component {
  constructor(props) {
    super()
    // this.state = {
    //   userId
    // }
  }

  componentDidMount() {
    this.props.getUserRecipes(this.props.user.id)
  }

  render () {
    if (!this.props.user.email) {
      return (
        <div>
          You must be logged in to see your recipe book, please log in <Link to="/signIn">here</Link>
        </div>
      )
    }
    else { // user is logged in
      if (this.props.recipes.length > 0) {
        const {recipes} = this.props
        return (
          <div id='recipeBook'>
            <h1>Your Recipe Book</h1>
            {recipes.map(recipe => {
              return (
                <ul id="1">
                  <li><b>Title: {recipe.title}</b></li>
                  <li><img src={recipe.image}></img></li>
                  <li>Servings: {recipe.servings}</li>
                  <li>Ingredients:
                    {recipe.extendedIngredients.map(ingredient => {
                    return (
                    <ul id="2">
                      <li>{ingredient}</li>
                    </ul>)
                  })}
                  </li>
                  <li>Instructions: {recipe.instructions}</li>
                  <li>Servings: {recipe.servings}</li>
                  <li>Servings: {recipe.servings}</li>
                </ul>
              )
            })}

          </div>
        )
      }
      else {
        return (
          <div>
            You currently don't have any recipes, upload or extract some to create your recipe book
          </div>
        )
      }
    }
    return (
      <div className = 'Home'>
        Recipes for a user will go here
      </div> )
    // return (
    //     <div id = "visualizedIngredients">
    //         {this.state.visualizedIngredients}
    //     </div>
    // )
  }
}

const mapState = (state) => ({
  user: state.user,
  recipes: state.recipes
});

const mapDispatch = (dispatch) => ( {
  getUserRecipes: (userId) => dispatch(getUserRecipes(userId)),
    // updateUser: (userId, userProfile) => dispatch(editProfile(userId, userProfile))
  }
)

export default connect(mapState, mapDispatch)(RecipeBook);
