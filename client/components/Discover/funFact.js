import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from 'react-redux'

class FunFact extends React.Component {
  constructor () {
    super ()
    this.state = {
      funFact: '',
    }
    this.extractFunFact = this.extractFunFact.bind(this)
  }

  componentDidMount() {
    this.extractFunFact()
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


  render() {
    return (
      <div id="discoverContainer">
          <h3>Did You Know?</h3>
          <div id="funFactText">
            {this.state.funFact.text}
            <p></p>
          </div>
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

export default connect(mapState, mapDispatch)(FunFact);
