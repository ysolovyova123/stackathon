import React, { useState, useEffect } from "react";
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

const EditRecipe = ({text, change, addARecipe}) => {

  return (

    <div id="editRecipeContainer">
      <h3>Edit Your Recipe Here</h3>
      <div id="parsedText">
        <br></br>
        <textarea id="parsedText" rows="10" cols="130" wrap="hard" value={text.text}></textarea>
        <p></p>
      </div>

      <div id="singleRecipeInBook">
      <form id="editRecipeForm">
        <h3>General Information:</h3>
        Title:
        <input name="title" onChange={change}></input>
        <p></p>
        Image URL:
        <input name="image" onChange={change}></input>
        <p></p>
        Servings:
        <input name="servings" onChange={change}></input>
        <p></p>
        Total Prep Time:
        <input name="readyInMinutes" onChange={change}></input>
        <p></p>
        Source URL:
        <input name="sourceUrl" onChange={change}></input>
        <p></p>
        Notes from the Chef:
        <input name="chefNotes" onChange={change}></input>
        <p></p>
        Dish Types:
        <select id="dishTypes" name="dishTypes" onChange={change}>
            <option value = "beverage">beverage</option>
            <option value = "snack">snack</option>
            <option value = "breakfast">breakfast</option>
            <option value = "appetizer">appetizer</option>
            <option value = "soup">soup</option>
            <option value = "main course">main course</option>
            <option value = "dessert">dessert</option>
            <option value = "side dish">side dish</option>
          </select>
        <p></p>
        Cuisines:
        <select id="cuisines" name="cuisines" onChange={change}>
            <option value = "African">African</option>
            <option value = "American">American</option>
            <option value = "British">British</option>
            <option value = "Cajun">Cajun</option>
            <option value = "Caribbean">Caribbean</option>
            <option value = "Chinese">Chinese</option>
            <option value = "Eastern European">Eastern European</option>
            <option value = "European">European</option>
            <option value = "French">French</option>
            <option value = "German">German</option>
            <option value = "Greek">Greek</option>
            <option value = "Indian">Indian</option>
            <option value = "Irish">Irish</option>
            <option value = "Italian">Italian</option>
            <option value = "Japanese">Japanese</option>
            <option value = "Jewish">Jewish</option>
            <option value = "Korean">Korean</option>
            <option value = "Latin American">Latin American</option>
            <option value = "Mediterranean">Mediterranean</option>
            <option value = "Mexican">Mexican</option>
            <option value = "Middle Eastern">Middle Eastern</option>
            <option value = "Nordic">Nordic</option>
            <option value = "Southern">Southern</option>
            <option value = "Spanish">Spanish</option>
            <option value = "Thai">Thai</option>
            <option value = "Vietnamese">Vietnamese</option>
          </select>
        </form>
        <h3>Ingredients:</h3>

        Please separate each item by a comma (,)
        <p></p>
        <textarea name="ingredientsList" rows="10" cols="130" wrap="hard" placeholder="Ingredients go here" onChange={change}></textarea>

        <h3>Instructions:</h3>

        Please separate each instruction item by a period (.)
        <p></p>
        <textarea name="instructionList" rows="10" cols="130" wrap="hard" placeholder="Instructions go here" onChange={change}></textarea>

      <p></p>
      <button id ="addToRecipeBoxButton" type='submit' onClick={addARecipe}>Save Recipe</button>
      </div>
    </div>
  )
}

export default EditRecipe


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
