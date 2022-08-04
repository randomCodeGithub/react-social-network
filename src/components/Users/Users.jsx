import React from "react";
import classes from "./Users.module.css";
import * as axios from "axios";
import userPhoto from "../../assets/images/avatar_default.webp";
import { NavLink } from "react-router-dom";
import { usersAPI } from "../../api/api";
const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div>
        {pages.map((page) => {
          return (
            <span
              className={props.currentPage === page && classes.selectedPage}
              onClick={() => {
                props.onPageChanged(page);
              }}
            >
              {page}
            </span>
          );
        })}
      </div>
      {/* <button onClick={this.getUsers}>get users Class</button> */}
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <NavLink to={"/profile/" + u.id}>
                <img
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                  className={classes.userPhoto}
                />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button
                  disabled={props.followingInProgress}
                  onClick={() => {
                    props.unfollow(u.id);
                    // props.toggleFollowingProgress(true, u.id);
                    // axios
                    //   .delete(
                    //     `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                    //     {
                    //       withCredentials: true,
                    //       headers: {
                    //         "API-KEY": "222ed95a-7be8-4168-9dd7-cd9b033abe17",
                    //       },
                    //     }
                    //   )
                    // usersAPI.unfollow(u.id)
                    //   .then((response) => {
                    //     if (response.data.resultCode === 0) {
                    //       props.unfollow(u.id);
                    //     }
                    //     props.toggleFollowingProgress(false, u.id);
                    //   });
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress}
                  onClick={() => {
                    props.follow(u.id);
                    // props.toggleFollowingProgress(true, u.id);
                    // axios
                    //   .post(
                    //     `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                    //     {},
                    //     {
                    //       withCredentials: true,
                    //       headers: {
                    //         "API-KEY": "222ed95a-7be8-4168-9dd7-cd9b033abe17",
                    //       },
                    //     }
                    //   )
                    // usersAPI.follow(u.id)
                    //   .then((response) => {
                    //     if (response.data.resultCode === 0) {
                    //       props.follow(u.id);
                    //     }
                    //     props.toggleFollowingProgress(false, u.id);
                    //   });
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
