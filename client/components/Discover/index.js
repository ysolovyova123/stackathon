import React, { useState, useEffect } from "react";
import { connect } from 'react-redux'
import FunFact from './funFact'
import FavCuisineRecipes from './favCuisine'
import FavMealRecipes from './favMeal'

class Discover extends React.Component {
  constructor () {
    super ()
  }

  componentDidMount() {
  }

  render() {
    return (
      <div id="discoverContainer">
        <FunFact />
        <FavCuisineRecipes />
        <FavMealRecipes />
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
