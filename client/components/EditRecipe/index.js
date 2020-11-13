import React, { useState, useEffect } from "react";
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

const EditRecipe = ({text, userId, title, image, servings, readyInMinutes, sourceUrl, chefNotes, dishTypes, cuisines, extendedIngredients, instructions, analyzedInstructions, change, addARecipe}) => {

  return (

    <div id="editRecipeContainer">
      <h2>Edit Your Recipe Here</h2>
      Parsed text:
      <br></br>
      <textarea rows="10" cols="100" wrap="hard" value={text.text}></textarea>

      <form id="editRecipeForm">
        <label htmlFor="title">Title:</label>
        <input name="title" onChange={change}></input>
        <label htmlFor="image">Image URL:</label>
        <input name="image" onChange={change}></input>
        <label htmlFor="servings">Servings:</label>
        <input name="servings" onChange={change}></input><label htmlFor="readyInMinutes">Total Prep Time:</label>
        <input name="readyInMinutes" onChange={change}></input><label htmlFor="sourceUrl">Source URL:</label>
        <input name="sourceUrl" onChange={change}></input><label htmlFor="chefNotes">Notes from the Chef:</label>
        <input name="chefNotes" onChange={change}></input><label htmlFor="dishTypes">Dish Types:</label>
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
        <label htmlFor="cuisines">Cuisines:</label>
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
        <h3>Ingredients:</h3>

        <label htmlFor="ingredients">Please separate each item by a comma (,) </label>
        <textarea name="ingredientsList" rows="10" cols="100" wrap="hard" value="Ingredients go here" onChange={change}></textarea>

        <h3>Instructions:</h3>

        <label htmlFor="instructions">Please separate each instruction item by a period (.) </label>
        <textarea name="instructionList" rows="10" cols="100" wrap="hard" value="Instructions go here" onChange={change}></textarea>

      </form>
      <p></p>
      <button type='submit' onClick={addARecipe}>Save Recipe</button>
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
