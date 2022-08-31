import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {
  getUserProfile,
  getStatus,
  updateStatus,
  savePhoto,
  saveProfile
} from "../../redux/profile-reducer";
// import { Redirect, withRouter } from "react-router";
import { Redirect } from "react-router";
import { usersAPI } from "../../api/api";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { withRouter } from "../../hoc/withRouter";

class ProfileContainer extends React.Component {
  refreshProfile = () => {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
    }

    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  };
  componentDidMount = () => {
    this.refreshProfile();
    // let userId = this.props.match.params.userId;
    // if (!userId) {
    // userId = 20897;
    // userId = this.props.authorizedUserId;
    // }

    // this.props.getUserProfile(userId);
    // setTimeout(() => {
    // this.props.getStatus(userId);
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

  componentDidUpdate = (prevProps) => {
    if (this.props.router.params.userId != prevProps.router.params.userId) {
      this.refreshProfile();
    }
  };

  render() {
    return (
      <Profile
        isOwner={!this.props.router.params.userId}
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
        savePhoto={this.props.savePhoto}
        saveProfile={this.props.saveProfile}
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
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile }),
  withRouter
  // withAuthRedirect
)(ProfileContainer);

// OLD
// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

// export default connect(mapStateToProps, { getUserProfile })(
//   WithUrlDataContainerComponent
// );
