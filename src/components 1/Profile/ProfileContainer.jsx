import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { showProfile } from "./../../redux/profile-reducer";
import { withRouter } from "react-router-dom";


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

let WithUrlContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { showProfile })(
  WithUrlContainerComponent
);
