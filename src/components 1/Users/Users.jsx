import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/userPhoto.png";
import { NavLink } from "react-router-dom";



let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let currentPage = props.currentPage;
  let currentPageF = currentPage - 5 < 0 ? 0 : currentPage - 5;
  let currentPageL = currentPageF + 5;
  let slicedPages = pages.slice(currentPageF, currentPageL + 2);

  return (
    <div>
      <div className={classes.pagination}>
        {slicedPages.map((p) => (
          <span
            className={props.currentPage === p && classes.selectedPage}
            onClick={() => {
              props.onPageChange(p);
            }}
          >
            {p}
          </span>
        ))}
      </div>
      {props.usersData.map((u) => (
        <div key={u.id}>
          <div className={classes.container}>
            <div className={classes.basic}>
              <div className={classes.photo}>
                <NavLink to={"/profile/" + u.id}>
                  {" "}
                  <img src={u.small != null ? u.photos.small : userPhoto} />
                </NavLink>
              </div>
              <div className={classes.description}>
                <div className={classes.name}> {u.name} </div>
                <div className={classes.status}>{u.status}</div>
              </div>
              <div className={classes.button}>
                {u.followed ? (
                  <button disabled={ (props.followingInProgress.some(id => id === u.id))}
                    className={classes.btn}
                    onClick={() => {
                      props.unfollow(u.id)
                    }}
                  >
                    {" "}
                    Unfollow{" "}
                  </button>
                ) : (
                  <button
                    disabled={(props.followingInProgress.some(id => id === u.id))}
                    
                    className={classes.btn}
                    onClick={() => {
                      props.follow(u.id)
                    }}
                  >
                    {" "}
                    Follow
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
