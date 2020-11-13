import React, { useState, useEffect } from "react";
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

class EditRecipe extends React.Component {
  constructor () {
    super ()
  }

  componentDidMount() {
    // tbd
  }

  render () {
    return (
      <div>Edit recipe component goes here</div>
    )
  }
}

const mapState = (state) => ({
  // user: state.user
});

const mapDispatch = (dispatch) => ( {
  // addARecipe: (title, image, servings, readyInMinutes, sourceUrl, chefNotes, dishTypes, cuisines, extendedIngredients, instructions, analyzedInstructions,userId) => dispatch(addARecipe(title, image, servings, readyInMinutes, sourceUrl, chefNotes, dishTypes, cuisines, extendedIngredients, instructions, analyzedInstructions,userId)),
  }
)

export default connect(mapState, mapDispatch)(EditRecipe);



// render () {
//   return (
//     <div className = 'Home'>
//       Put in the recipe url here: <input id="urlForRecipe"></input>
//       <p></p>
//       <button onClick={this.extractedRecipe}>Try me to extract a recipe</button>
//       <p>
//         <h3> Extracted Recipe: </h3>
//       </p>
//       <ul>
//         <li>
//         Title: <input id="title" value={this.state.title}></input>
//         </li>
//         <li>
//           Servings: <input id="servings" value={this.state.servings}></input>
//         </li>
//         <h3>Ingredients</h3>
//         {this.state.extendedIngredients.length === 0 ? "Loading" : this.state.extendedIngredients.map(ingredient => {
//           return (
//             <li>{ingredient.name}</li>
//           )
//         })}
//         <h4>Instructions:</h4>
//         {this.state.analyzedInstructions.length === 0 ? "Loading" : this.state.analyzedInstructions.map(instruction => {
//           return (
//             <li>{instruction.number}: <input name="analyzedInstructions" id={instruction.number-1} value={instruction.step} onChange={this.onChange}></input></li>
//           )
//         })}
//         {/* <li>
//           Instructions: {this.state.instructions}
//         </li> */}
//       </ul>
//     </div>
//   )
// }
// }
