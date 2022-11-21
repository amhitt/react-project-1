import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { showProfile } from "./../../redux/profile-reducer";
import { Redirect, withRouter } from "react-router-dom";


class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 26569;
    }
    this.props.showProfile(userId)
  }

  render() {
    if(!this.props.isAuth){
      return <Redirect to={"/login"}/>
  }
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth
});

let WithUrlContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { showProfile })(
  WithUrlContainerComponent
);
