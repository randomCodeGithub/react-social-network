import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
const Users = (props) => {
  // let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  // let pages = [];

  // for (let i = 1; i <= pagesCount; i++) {
  //   pages.push(i);
  // }
  return (
    <div>
      {/* <div>
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
      </div> */}
      <Paginator
        currentPage={props.currentPage}
        onPageChanged={props.onPageChanged}
        totalUsersCount={props.totalUsersCount}
        pageSize={props.pageSize}
      />
      <div>
        {props.users.map((u) => (
          <User
            user={u}
            key={u.id}
            followingInProgress={props.followingInProgress}
            unfollow={props.unfollow}
            follow={props.follow}
          />
        ))}
      </div>
    </div>
  );
};

export default Users;
