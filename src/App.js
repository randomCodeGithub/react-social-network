import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {
  BrowserRouter,
  HashRouter,
  Navigate,
  Redirect,
  Route,
  Routes,
  Switch,
  // withRouter,
} from "react-router-dom";
import "./App.css";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
// import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { initializeApp } from "./redux/app-reducer";
import React, { Component, Suspense } from "react";
import { connect, Provider } from "react-redux";
import { compose } from "redux";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import { withSuspense } from "./hoc/withSuspense";
import { withRouter } from "./hoc/withRouter";

const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);
const ProfileContainer = React.lazy(() =>
  import("./components/Profile/ProfileContainer")
);

class App extends Component {
  catchAllUnhandledErrors = (promiseRejectionEvent) => {
    alert("some error occured!");
    console.error(promiseRejectionEvent);
  };
  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }
  componentWillUnmount = () => {
    window.removeEventListener(
      "unhandledrejection",
      this.catchAllUnhandledErrors
    );
  };
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div role={"main"} className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Suspense fallback={<Preloader />}>
            <Routes>
              {/* <Navigate exact from="/" to="/profile" /> */}
              <Route path="/news" element={News} />
              <Route path="/music" element={Music} />
              <Route path="/settings" element={Settings} />

              <Route path="/dialogs" element={<DialogsContainer />} />
              <Route path="/profile" element={<ProfileContainer />} />
              <Route path="/profile/:userId" element={<ProfileContainer />} />
              {/* <Route path="/profile/:userId?" element={<ProfileContainer />} /> */}
              <Route path="/users" element={<UsersContainer />} />
              <Route path="/login/facebook" element={<div>Facebook</div>} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<div>404 NOT FOUND</div>} />
            </Routes>
          </Suspense>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

let AppContainer = compose(
  // withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

const SamuraiJSApp = (props) => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};

export default SamuraiJSApp;
