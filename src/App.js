import logo from "./logo.svg";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { Route, withRouter } from "react-router-dom";
import "./App.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { getAuthUserData } from "./redux/auth-reducer";
import { initializeApp } from "./redux/app-reducer";
import { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import Preloader from "./components/common/Preloader/Preloader";

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      // <BrowserRouter>
      <div className="app-wrapper">
        {/* <Header /> */}
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          {/* <Route path="/dialogs" component={Dialogs} />
            <Route path="/profile" component={Profile} /> */}
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />

          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/login" render={() => <Login />} />

          {/* <Route
              path="/dialogs"
              render={() => (
                <Dialogs
                  dialogs={props.state.dialogsPage.dialogs}
                  messages={props.state.dialogsPage.messages}
                />
              )}
            />
            <Route
              path="/profile"
              render={() => <Profile posts={props.state.profilePage.posts} />}
            /> */}
        </div>
      </div>
      // </BrowserRouter>
    );
  }
}

let mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);
