import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from 'react-redux'

class Discover extends React.Component {
  constructor () {
    super ()
    this.state = {
      funFact: '',
      newRecipes: []
    }
    this.extractFunFact = this.extractFunFact.bind(this)
    this.extractNewRecipes = this.extractNewRecipes.bind(this)
  }

  componentDidMount() {
    this.extractFunFact()
    this.extractNewRecipes()
  }

  async extractFunFact(e) {
    let params = {
      apiKey:'179162a815264406b6eee2d69abad1dd'
    }
    let funFact = (await axios.get('https://api.spoonacular.com/food/trivia/random', {params} )).data
    this.setState({
      funFact
    })
  }

  async extractNewRecipes(e) {
    let params = {
      apiKey:'179162a815264406b6eee2d69abad1dd',
      cuisine: 'Mediterranean',
      intolerances: 'Dairy, Shellfish',
      number: 3,
      sort: 'random'
    }

    let newRecipes = (await axios.get('https://api.spoonacular.com/recipes/complexSearch', {params} )).data.results
    console.log(newRecipes)
    this.setState({
      newRecipes
    })
    console.log(this.state)
  }

  render() {
    return (
      <div id="discoverContainer">
        <div id="discoverFunFact">
          <h1>Fun fact goes here</h1>
          <li>{this.state.funFact.text}</li>
        </div>
        <div id="discoverNewRecipes">
          <h1>Suggested recipes by your fav cuisine go here</h1>
          <ul>{this.state.newRecipes.map(recipe => { return (<li>{recipe.title}</li>)})}</ul>
        </div>
        <h1>Suggested recipes by your fav meal go here </h1>
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

export default connect(mapState, mapDispatch)(Discover);
