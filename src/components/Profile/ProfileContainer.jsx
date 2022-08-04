import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {
  getUserProfile,
  getStatus,
  updateStatus,
} from "../../redux/profile-reducer";
import { Redirect, withRouter } from "react-router";
import { usersAPI } from "../../api/api";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount = () => {
    let userId = this.props.match.params.userId;
    if (!userId ) {
      // userId = 20897;
      userId = this.props.authorizedUserId;
    }

    this.props.getUserProfile(userId);
    // setTimeout(() => {
    this.props.getStatus(userId);
    // }, 1000);

    // usersAPI.getProfile(userId).then((response) => {
    //   this.props.setUserProfile(response.data);
    // });
    // axios
    //   .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
    //   .then((response) => {
    //     this.props.setUserProfile(response.data);
    //   });
  };
  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.id,
  isAuth: state.auth.isAuth,
  email: state.auth.email,
});

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
  withRouter,
  // withAuthRedirect
)(ProfileContainer);

// OLD
// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

// export default connect(mapStateToProps, { getUserProfile })(
//   WithUrlDataContainerComponent
// );
