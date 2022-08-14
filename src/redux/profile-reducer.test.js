import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";

let state = {
    postsData: [
      { id: 1, message: "ETA NE RABOTAETsdsd?", likesCount: 29 },
      { id: 2, message: "DA ja napisal govnokod!", likesCount: 3000 },
    ],
  };

test("new post length should be incremented", () => {

  let action = addPostActionCreator("my new post");
  let newState = profileReducer(state, action);

 expect(newState.postsData.length).toBe(3);
//  expect(newState.postsData[3].message).toBe("my new post");
});

test("message ofnew post should be correct", () => {
  let action = addPostActionCreator("my new post");
  let newState = profileReducer(state, action);

  expect(newState.postsData[2].message).toBe("my new post");
});

test("after deleting length of messages should be decrement", () => {
  let action = deletePost(1);
  let newState = profileReducer(state, action);

  expect(newState.postsData.length).toBe(1);
});

test("after deleting length of messages shouldt be decrement if id is incorrect", () => {
  let action = deletePost(1000);
  let newState = profileReducer(state, action);

  expect(newState.postsData.length).toBe(2);
});
