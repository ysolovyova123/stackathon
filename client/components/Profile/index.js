import React, { useState, useEffect } from "react";
import { connect } from 'react-redux'

class Profile extends React.Component {
  constructor () {
    super ()
  }

  render() {
    const {user} = this.props
    if (user.email) {
      return (
        <div id="profileContainer">
          <h3>My Profile</h3>
          <div id="userProfile">
            <ul>
              <li>First Name: {user.firstName}</li>
              <li>Last Name: {user.lastName}</li>
              <li>User since: {user.createdAt}</li>
              <li>Favorite Dish: {user.favoriteDishType[0]}</li>
              <li>Favorite Cuisine: {user.favoriteCuisine[0]}</li>
              <li>Food Intolerances: {user.intolerances === null ? "N/A" : user.intolerances.map(intolerance => {
                return (
                  <ul key = {user.id}>
                    <li>{intolerance}</li>
                  </ul>
                )
              })}</li>
            </ul>
            <div id="userProfileButtons">
              <button class="editProfileButton" onClick={console.log('this functionality is still being built')}>Edit</button>
              <button class="deleteProfileButton" onClick={console.log('this functionality is still being built')}>Delete</button>
            </div>
          </div>
        </div>
      )
    }

    else {
      return (
        <div id="profileContainer">
          Loading
        </div>
      )
    }
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

export default connect(mapState, mapDispatch)(Profile);
