import { usersAPI } from "../api/api";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_COUNT = "SET-TOTAL-COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE-IS-FOLLOWING-PROGRESS";

let initialState = {
  users: [
    //     {
    //       id: 1,
    //       photoUrl:
    //         "https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png",
    //       followed: true,
    //       fullName: "Artur",
    //       status: "My status",
    //       location: { country: "Latvia", city: "Jurmala" },
    //     },
    //     {
    //       id: 2,
    //       photoUrl:
    //         "https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png",
    //       followed: false,
    //       fullName: "Vadim",
    //       status: "He's status",
    //       location: { country: "Latvia", city: "Kemeri" },
    //     },
  ],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userid) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userid) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS: {
      return { ...state, users: action.users };
    }

    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }

    case SET_TOTAL_COUNT: {
      return { ...state, totalUsersCount: action.totalCount };
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }

    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userid]
          : [...state.followingInProgress.filter((id) => id != action.userid)],
      };
    }
    default:
      return state;
  }
};

export const followSuccess = (userid) => ({
  type: FOLLOW,
  userid,
});

export const unfollowSuccess = (userid) => ({
  type: UNFOLLOW,
  userid,
});

export const setUsers = (users) => ({
  type: SET_USERS,
  users,
});

export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

export const setTotalUsersCount = (totalCount) => ({
  type: SET_TOTAL_COUNT,
  totalCount,
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

export const toggleFollowingProgress = (isFetching, userid) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
});

export const requestUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(currentPage))
    usersAPI.getUsers(currentPage, pageSize).then((data) => {
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
    });
  };
};

export const follow = (userID) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userID));
    usersAPI.follow(userID).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(followSuccess(userID));
      }
      dispatch(toggleFollowingProgress(false, userID));
    });
  };
};

export const unfollow = (userID) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userID));
    usersAPI.unfollow(userID).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(unfollowSuccess(userID));
      }
      dispatch(toggleFollowingProgress(false, userID));
    });
  };
};

export default usersReducer;
