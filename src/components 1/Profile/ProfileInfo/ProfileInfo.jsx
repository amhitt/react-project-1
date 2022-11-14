import React from 'react';
import classes from './ProfileInfo.module.css'


const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img src='https://images.unsplash.com/photo-1635198103839-0f0b45154276?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'/>
      </div>
      <div className={classes.descriptionBlock}>
        {
        props.profile && <div>
          <div><img className={classes.ava} src={props.profile.photos.small} alt="" /></div>
          <div><h1>Hi, my name is {props.profile.fullName}</h1></div>
          <div><h3> {props.profile.aboutMe}</h3></div>
          </div>
        
        }
        
      </div>
      
 
    </div>
    )
}

export default ProfileInfo