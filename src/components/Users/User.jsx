import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/avatar_default.webp";
import { NavLink } from "react-router-dom";
const User = ({ user, followingInProgress, unfollow, follow }) => {
  let u = user;
  return (
    <div>
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
              disabled={followingInProgress}
              onClick={() => {
                unfollow(u.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={followingInProgress}
              onClick={() => {
                follow(u.id);
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
  );
};

export default User;
