import React from "react";
import { connect } from "react-redux";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profile-reducer";
// import StoreContext from "../../../StoreContext";
import MyPosts from "./MyPosts";
import Post from "./Post/Post";

// const MyPostContainer = (props) => {
//   // let state = props.store.getState();

//   // let addPost = () => {
//   //   props.store.dispatch(addPostActionCreator());
//   // };

//   // let onPostChange = (text) => {
//   //   props.store.dispatch(updateNewPostTextActionCreator(text));
//   // };

//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let state = store.getState();

//         let addPost = () => {
//           store.dispatch(addPostActionCreator());
//         };

//         let onPostChange = (text) => {
//           store.dispatch(updateNewPostTextActionCreator(text));
//         };
//         return (
//           <MyPosts
//             updatePostText={onPostChange}
//             addPost={addPost}
//             posts={state.profilePage.postsData}
//             newPostText={state.profilePage.newPostText}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPostBody) => {
      dispatch(addPostActionCreator(newPostBody));
    },
  };
};

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostContainer;
