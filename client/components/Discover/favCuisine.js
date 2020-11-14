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
    let {favoriteCuisine, intolerances} = this.props.user
    let tempIntolerances
    if (intolerances) {
      tempIntolerances = intolerances.join(',')
    }
    let params = {
      apiKey:'179162a815264406b6eee2d69abad1dd',
      cuisine: favoriteCuisine,
      intolerances: tempIntolerances,
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
          <h3>{this.props.user.email? 'Suggested recipes by your favorite cuisine' : 'Discover a different cuisine'}</h3>
          <br></br>
          {this.state.newRecipesByCuisine.map(recipe => { return (
            <div id="discoverCuisineItem">
              <b>{recipe.title}</b>
              <br></br>
              <a href={this.createNewRecipeUrl(recipe.id, recipe.title)} target="_blank" rel="noopener noreferrer"><img src={recipe.image}></img></a>
                {/* <li>{recipe.title}</li>
                <li><a href={this.createNewRecipeUrl(recipe.id, recipe.title)} target="_blank" rel="noopener noreferrer"><img src={recipe.image}></img></a></li> */}
              {/* </ul> */}
            </div>
          )})}
        </div>
    )
  }

}

const mapState = state => (
  {
    user: state.user
  }
)

const mapDispatch = (dispatch) => {
    return {
      //logOutUser: () => dispatch({type: "LOG_OUT"})
    }
}

export default connect(mapState, mapDispatch)(FavCuisineRecipes);
