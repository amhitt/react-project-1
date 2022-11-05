// 7f358344-fad0-49a9-b51f-4dc5ca59ded2 - api-key

import React from "react";
import classes from "./Users.module.css";
import axios from 'axios'
import userPhoto from '../../assets/images/userPhoto.png'

let getUsers = (props) => {
  if (props.usersData.length === 0) {
      axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
      props.setUsers(response.data.items)
``})
 } 

  
  return (
    <div>
  <button onClick={getUsers}>Get Users</button>
  
      {props.usersData.map((u) => (
        <div key={u.id}>
          <div className={classes.container}>
            <div className={classes.basic}>
              <div className={classes.photo}>
                <img src={u.small != null ? u.photos.small : userPhoto} alt="" />
              </div>
              <div className={classes.description}>
                <div className={classes.name}> {u.name} </div>
                {/* <div className={classes.location}>
                  {" "}
                  {u.location.country}, {u.location.city}{" "}
                </div> */}
                <div className={classes.status}>{u.status}</div>
              </div>
              <div className={classes.button}>
                {u.isFollowed 
                    ? (<button onClick={() => {props.unfollow(u.id);}}> Unfollow </button>) 
                    : ( <button onClick={() => {props.follow(u.id)}}> Follow </button>)}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default getUsers;
