import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from 'react-redux'

class FavCuisineRecipes extends React.Component {
  constructor () {
    super ()
    this.state = {
      newRecipesByCuisine: [],
    }
    this.extractNewRecipesByCuisine = this.extractNewRecipesByCuisine.bind(this)
    this.createNewRecipeUrl = this.createNewRecipeUrl.bind(this)
  }

  componentDidMount() {
    this.extractNewRecipesByCuisine()
  }

  async extractNewRecipesByCuisine(e) {
    let params = {
      apiKey:'179162a815264406b6eee2d69abad1dd',
      cuisine: 'Mediterranean',
      intolerances: 'Dairy, Shellfish',
      number: 3,
      sort: 'random'
    }

    let newRecipesByCuisine = (await axios.get('https://api.spoonacular.com/recipes/complexSearch', {params} )).data.results
    console.log(newRecipesByCuisine)
    this.setState({
      newRecipesByCuisine
    })
  }

  createNewRecipeUrl(id,str) {
    let source = 'https://spoonacular.com/recipes/'
    let newStr = str.split(' ').join('-')
    return source+newStr+'-'+id
  }

  render() {
    return (
        <div id="discoverNewRecipesByCuisine">
          <h1>Suggested recipes by your fav cuisine</h1>
          {this.state.newRecipesByCuisine.map(recipe => { return (
            <ul key="recipesbycuisine">
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

export default connect(mapState, mapDispatch)(FavCuisineRecipes);
