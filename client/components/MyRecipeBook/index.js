import React from "react";
import { connect } from "react-redux";
import ReactHtmlParser from 'react-html-parser';
import axios from "axios";

class RecipeBook extends React.Component {
  constructor(props) {
    super()
    this.state = {
      visualizedIngredients: [],
    }
    this.generateVisualizedIngredients = this.generateVisualizedIngredients.bind(this)
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

  async generateVisualizedIngredients(e) {

    let apiKey = '179162a815264406b6eee2d69abad1dd'

    let body = {
      ingredientList: '3 oz flour',
      // ingredients: "1/4 cup sugar \n 1/2 tbsp flour \n 1/3 cup chocolate chip cookies",
      servings: 2,
      measure: 'metric',
      view: 'grid',
      defaultCss: true,
      showBacklink: true
    }

    let options = {
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        accept: 'text/html',
      }
    }

    let visualizedIngredients = (await axios.post(`https://api.spoonacular.com/recipes/visualizeIngredients?apiKey=${apiKey}`, body, options)).data
    console.log(visualizedIngredients)
    this.setState({
      visualizedIngredients: [visualizedIngredients]
    })
    //return visualizedIngredients
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

  render () {
    return (
      <div className = 'Home'>
        {/* <h1>Generate visualized ingredients here</h1>
        <button onClick={this.generateVisualizedIngredients}>Try me to get list of visualized ingredients</button> <p></p>
        {this.state.visualizedIngredients === '' ? "Visualized ingredients are loading" : <div> {ReactHtmlParser(this.state.visualizedIngredients)} </div>

        // this.state.visualizedIngredients.map(grid => {
        //   return (
        //     <div id ="visualizedIngredients">{grid}</div>
        //   )
        // })
        } */}

        
      </div> )
    // return (
    //     <div id = "visualizedIngredients">
    //         {this.state.visualizedIngredients}
    //     </div>
    // )
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
