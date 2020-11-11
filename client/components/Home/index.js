import React from "react";
import { connect } from "react-redux";
import axios from "axios";

class Home extends React.Component {
  constructor(props) {
    super()
  }

  componentDidMount() {
    // tbd
  }

  render () {
    return (
      <div className = 'Home'>
        Home page content will go here
      </div>
    )
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

export default connect(mapState, mapDispatch)(Home);
