import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

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

let store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, message: "ETA NE RABOTAETsdsd?", likesCount: 29 },
        { id: 2, message: "DA ja napisal govnokod!", likesCount: 3000 },
      ],
      newPostText: "my-text",
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Artur" },
        { id: 2, name: "Edgar" },
        { id: 3, name: "Vadim" },
      ],
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "Bye!11" },
      ],
      newMessageText: "",
    },
    sidebar: {},
  },
  _callSubscriber() {
    console.log("state is changed");
  },
  getState() {
    return this._state;
  },
  addPost() {
    let newPost = {
      id: 3,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };
    this._state.profilePage.newPostText = "";
    this._state.profilePage.postsData.push(newPost);
    this._callSubscriber(this._state);
  },
  updatePostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer; //pattern - observer
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._callSubscriber(this._state);

    // if (action.type === ADD_POST) {
    //   let newPost = {
    //     id: 3,
    //     message: this._state.profilePage.newPostText,
    //     likesCount: 0,
    //   };
    //   this._state.profilePage.newPostText = "";
    //   this._state.profilePage.postsData.push(newPost);
    //   this._callSubscriber(this._state);
    // } else if (action.type === UPDATE_NEW_POST_TEXT) {
    //   this._state.profilePage.newPostText = action.newText;
    //   this._callSubscriber(this._state);
    // } else if (action.type === SEND_MESSAGE) {
    //   let newMessage = this._state.dialogsPage.newMessageText;
    //   this._state.dialogsPage.newMessageText = "";
    //   this._state.dialogsPage.messages.push({ id: 4, message: newMessage });
    //   this._callSubscriber(this._state);
    // } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
    //   this._state.dialogsPage.newMessageText = action.newText;
    //   this._callSubscriber(this._state);
    // }
  },
};

// let rerenderEntireTree = () => {
//   console.log("state is changed");
// };

// let state = {
//   profilePage: {
//     postsData: [
//       { id: 1, message: "ETA NE RABOTAETsdsd?", likesCount: 29 },
//       { id: 2, message: "DA ja napisal govnokod!", likesCount: 3000 },
//     ],
//     newPostText: "my-text",
//   },
//   dialogsPage: {
//     dialogs: [
//       { id: 1, name: "Artur" },
//       { id: 2, name: "Edgar" },
//       { id: 3, name: "Vadim" },
//     ],
//     messages: [
//       { id: 1, message: "Hi" },
//       { id: 2, message: "How are you?" },
//       { id: 3, message: "Bye!11" },
//     ],
//   },
//   sidebar: {},
// };

// export let addPost = () => {
//   let newPost = {
//     id: 3,
//     message: state.profilePage.newPostText,
//     likesCount: 0,
//   };
//   state.profilePage.newPostText = "";
//   state.profilePage.postsData.push(newPost);
//   rerenderEntireTree(state);
// };

// export let addPost = (postMessage) => {
//   let newPost = {
//     id: 3,
//     message: postMessage,
//     likesCount: 0,
//   };
//   state.profilePage.postsData.push(newPost);
//   renderEntireTree(state);
// };

// export let updatePostText = (newText) => {
//   state.profilePage.newPostText = newText;
//   rerenderEntireTree(state);
// };

// export const subscribe = (observer) => {
//   rerenderEntireTree = observer; //pattern - observer
// };

// export default state;
export default store;
