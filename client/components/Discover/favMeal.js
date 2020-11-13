import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from 'react-redux'

class FavMealRecipes extends React.Component {
  constructor () {
    super ()
    this.state = {
      newRecipesByMeal: [],
    }
    this.extractNewRecipesByMeal = this.extractNewRecipesByMeal.bind(this)
    this.createNewRecipeUrl = this.createNewRecipeUrl.bind(this)
  }

  componentDidMount() {
    this.extractNewRecipesByMeal()
  }

  async extractNewRecipesByMeal(e) {
    let params = {
      apiKey:'179162a815264406b6eee2d69abad1dd',
      type: 'Dessert',
      intolerances: 'Dairy, Shellfish',
      number: 3,
      sort: 'random'
    }

    let newRecipesByMeal = (await axios.get('https://api.spoonacular.com/recipes/complexSearch', {params} )).data.results
    console.log(newRecipesByMeal)
    this.setState({
      newRecipesByMeal
    })
    console.log(this.state)
  }

  createNewRecipeUrl(id,str) {
    let source = 'https://spoonacular.com/recipes/'
    let newStr = str.split(' ').join('-')
    return source+newStr+'-'+id
  }

  render() {
    return (
        <div id="discoverNewRecipesForMeal">
          <h1>Suggested recipes by your fav meal type</h1>
          {this.state.newRecipesByMeal.map(recipe => { return (
            <ul key="recipesbymeal">
              <li>{recipe.title}</li>
              <li><a href={this.createNewRecipeUrl(recipe.id, recipe.title)} target="_blank" rel="noopener noreferrer"><img src={recipe.image}></img></a></li>
            </ul>
          )})}
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

export default connect(mapState, mapDispatch)(FavMealRecipes);
