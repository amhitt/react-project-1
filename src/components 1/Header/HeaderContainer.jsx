import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { showMyProfile } from "../../redux/auth-reducer";
import { authAPI } from "../../api/api";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.showMyProfile();
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  login: state.auth.login,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { showMyProfile })(HeaderContainer);
