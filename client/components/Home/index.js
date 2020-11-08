import React from "react";
import { connect } from "react-redux";

class Home extends React.Component {
  constructor(props) {
    super()
  }

  componentDidMount() {

  }

  render () {
    return (
      <div className = 'Home'>
        Hello
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
