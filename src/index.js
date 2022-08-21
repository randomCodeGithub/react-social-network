import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/redux-store";
import { Provider } from "react-redux";
import SamuraiJSApp from "./App";

ReactDOM.render(
  // <BrowserRouter>
  //   <Provider store={store}>
  //     <App />
  //   </Provider>
  // </BrowserRouter>
  <SamuraiJSApp />,
  document.getElementById("root")
);

// rerenderEntireTree();
// store.subscribe(() => {
//   let state = store.getState();
//   rerenderEntireTree(state);
// });

// ReactDOM.render(
//     <App state={state} posts={postData} dialogs={dialogs} messages={messages} />,
//     document.getElementById("root")
//   );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
