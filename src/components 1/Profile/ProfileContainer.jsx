import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { showProfile, getUserStatus, updateStatus } from "./../../redux/profile-reducer";
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
    this.props.getUserStatus(userId)
  }

  render() {

    return <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
});



export default compose(
  connect(mapStateToProps, { showProfile, getUserStatus, updateStatus }),
  withRouter,
  withAuthRedirect,
  ) (ProfileContainer)