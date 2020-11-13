import React, { useState, useEffect } from "react";
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { registerUser } from '../../store/user'

class SignUp extends React.Component {
  constructor () {
    super ()
    this.tempIntolerances = []
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      favoriteCuisine: '',
      favoriteDishType: '',
      intolerances: []
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }


  onChange (e) {
    console.log('target is', e.target.name, 'value is', e.target.value)
    if (e.target.name === 'intolerancesList') {
      this.tempIntolerances.push(e.target.value)
      this.setState({
        intolerances: this.tempIntolerances
      })
    }
    else {
      this.setState({
        [e.target.name]: e.target.value
      })
    }
    console.log(this.state)
  }

  async onSubmit (e) {
    e.preventDefault();
    console.log('current state in Registration is: ',this.state)
    let {firstName, lastName, email, password, favoriteCuisine, favoriteDishType, intolerances} = this.state
    email = email.toLowerCase()
    // console.log(firstName, lastName, email, password, [favoriteCuisine], [favoriteDishType], intolerances)
    this.props.registerUser(firstName, lastName, email, password, [favoriteCuisine], [favoriteDishType], intolerances)
    console.log('user in the store is now ', this.props.user)
  }

  componentDidMount() {
  }

  render() {
    const {user} = this.props
    if (user.email) {
      return (
        <Redirect to ="/"></Redirect>
      )
    }
    else {
      return (
        <div id="signUpForm">
        <h1>Registration Form</h1>
          First Name:
          <input type="firstName" name = "firstName" onChange={this.onChange} />
          <p></p>
          Last Name:
          <input type="lastName" name = "lastName" onChange={this.onChange} />
          <p></p>
          Email:
          <input type="email" name = "email" onChange={this.onChange} />
          <p></p>
          Password:
          <input type="password" name = "password" onChange={this.onChange} />
          <p></p>
          Favorite Cuisine (select 1):
          <select id="cuisineList" name="favoriteCuisine" onChange={this.onChange}>
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
          <p></p>
          Favorite Dish Type (select 1):
          <select id="dishList" name="favoriteDishType" onChange={this.onChange}>
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
          Intolerances:
          <p></p>
          {/* <select multiple size="12" id="intolerancesList" name="intolerancesList" onChange={this.onChange}>
            <option value = "Dairy">Dairy</option>
            <option value = "Egg">Egg</option>
            <option value = "Gluten">Gluten</option>
            <option value = "Grain">Grain</option>
            <option value = "Peanut">Peanut</option>
            <option value = "Seafood">Seafood</option>
            <option value = "Sesame">Sesame</option>
            <option value = "Shellfish">Shellfish</option>
            <option value = "Soy">Soy</option>
            <option value = "Sulfite">Sulfite</option>
            <option value = "Tree Nut">Tree Nut</option>
            <option value = "Wheat">Wheat</option>
          </select> */}
          <input type="checkbox" name="intolerancesList" value="Dairy" onChange={this.onChange}></input> Dairy <br></br>
          <input type="checkbox" name="intolerancesList" value="Egg" onChange={this.onChange}></input> Egg <br></br>
          <input type="checkbox" name="intolerancesList" value="Gluten" onChange={this.onChange}></input> Gluten <br></br>
          <input type="checkbox" name="intolerancesList" value="Grain" onChange={this.onChange}></input> Grain <br></br>
          <input type="checkbox" name="intolerancesList" value="Peanut" onChange={this.onChange}></input> Peanut <br></br>
          <input type="checkbox" name="intolerancesList" value="Seafood" onChange={this.onChange}></input> Seafood <br></br>
          <input type="checkbox" name="intolerancesList" value="Sesame" onChange={this.onChange}></input> Sesame <br></br>
          <input type="checkbox" name="intolerancesList" value="Shellfish" onChange={this.onChange}></input> Shellfish <br></br>
          <input type="checkbox" name="intolerancesList" value="Soy" onChange={this.onChange}></input> Soy <br></br>
          <input type="checkbox" name="intolerancesList" value="Sulfite" onChange={this.onChange}></input> Sulfite <br></br>
          <input type="checkbox" name="intolerancesList" value="Tree Nut" onChange={this.onChange}></input> Tree Nut <br></br>
          <input type="checkbox" name="intolerancesList" value="Wheat" onChange={this.onChange}></input> Wheat <br></br>
          <p></p>
          <button type="submit" onClick={this.onSubmit}>Register</button>
        </div>
      )
    };
  }
}

const mapState = state => (
  {
    user: state.user
  }
)

const mapDispatch = (dispatch) => {
  return {
    registerUser: (firstName, lastName, email, password, favoriteCuisine, favoriteDishType, intolerances) => dispatch(registerUser(firstName, lastName, email, password, favoriteCuisine, favoriteDishType, intolerances))
  }
}

export default connect(mapState, mapDispatch)(SignUp);
