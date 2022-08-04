import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Header from "./Header";
import classes from "./Header.module.css";
import { getAuthUserData, logout } from "../../redux/auth-reducer";
import { authAPI } from "../../api/api";

class HeaderContainer extends React.Component {
  // componentDidMount() {
    // this.props.getAuthUserData();
    // authAPI.me().then((response) => {
    //   if (response.data.resultCode === 0) {
    //     let { id, login, email } = response.data.data;
    //     this.props.setAuthUserData(id, email, login);
    //   }
    // });

    // axios
    //   .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
    //     withCredentials: true,
    //   })
    //   .then((response) => {
    //     if (response.data.resultCode === 0) {
    //       let { id, login, email } = response.data.data;
    //       this.props.setAuthUserData(id, email, login);
    //     }
    //   });
  // }
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, {logout })(
  HeaderContainer
);
