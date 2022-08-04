import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { addPost, updatePostText } from "./redux/state";
import { BrowserRouter } from "react-router-dom";

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

export let renderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} addPost={addPost} updatePostText= {updatePostText} />
    </BrowserRouter>,
    document.getElementById("root")
  );
}
