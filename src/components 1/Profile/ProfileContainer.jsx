import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { showProfile } from "./../../redux/profile-reducer";
import {withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../HOC/withAuthRedirect";
import { compose } from "redux";


class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 26569;
    }
    this.props.showProfile(userId)
  }

  render() {

    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});



export default compose(
  connect(mapStateToProps, { showProfile }),
  withRouter,
  withAuthRedirect,
  ) (ProfileContainer)