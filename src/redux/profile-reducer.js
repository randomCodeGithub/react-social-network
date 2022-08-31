import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET-STATUS";
const DELETE_POST = "DELETE-POST";
const SAVE_PHOTO_SUCCESS = "SAVE-PHOTO-SUCCESS";

let initialState = {
  postsData: [
    { id: 1, message: "ETA NE RABOTAETsdsd?", likesCount: 29 },
    { id: 2, message: "DA ja napisal govnokod!", likesCount: 3000 },
  ],
  newPostText: "my-text",
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 3,
        message: action.newPostBody,
        likesCount: 0,
      };
      let stateCopy = { ...state };
      stateCopy.postsData = [...state.postsData];
      stateCopy.postsData.push(newPost);
      // stateCopy.newPostText = "";
      return stateCopy;
    }

    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }

    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }

    case DELETE_POST: {
      return {
        ...state,
        postsData: state.postsData.filter((p) => p.id != action.postId),
      };
    }
    case SAVE_PHOTO_SUCCESS: {
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos },
      };
    }
    default:
      return state;
  }
};

export const addPostActionCreator = (newPostBody) => ({
  type: ADD_POST,
  newPostBody,
});

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});

export const deletePost = (postId) => ({
  type: DELETE_POST,
  postId,
});

export const savePhotoSuccess = (photos) => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
});

export const getUserProfile = (userId) => async (dispatch) => {
  let response = await usersAPI.getProfile(userId);
  dispatch(setUserProfile(response.data));
};

export const getStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
  try {
    let response = await profileAPI.updateStatus(status);
  
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  } catch(error) {
    debugger
  }
};

export const savePhoto = (file) => async (dispatch) => {
  let response = await profileAPI.savePhoto(file);

  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
};

export const saveProfile = (profile, setStatus) => async (dispatch, getState) => {
  const userId = getState().auth.id;

  let response = await profileAPI.saveProfile(profile);

  if (response.data.resultCode === 0) {
    dispatch(getUserProfile(userId));
  }else {
    setStatus(response.data.messages[0])
    return Promise.reject(response.data.messages[0]);
  }
};

export default profileReducer;
