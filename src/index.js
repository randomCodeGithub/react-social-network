import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import { renderEntireTree } from "./render";
// import { addPost, updatePostText } from "./redux/state";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/redux-store";
import { Provider } from "react-redux";
// addPost('hahahhaha');

// let postData = [
//   { id: 1, message: "ETA NE RABOTAETsdsd?", likesCount: 229 },
//   { id: 2, message: "DA ja napisal govnokod!", likesCount: 3000 },
// ];

// let dialogs = [
//   { id: 1, name: "Artur" },
//   { id: 2, name: "Edgar" },
//   { id: 3, name: "Vadim" },
// ];
// let messages = [
//   { id: 1, message: "Hi" },
//   { id: 2, message: "How are you?" },
//   { id: 3, message: "Bye!11" },
// ];

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
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
