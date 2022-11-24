import React from 'react';
import { Redirect } from 'react-router-dom';
import MyPostsContainer from './MyPosts/MyPostsContainer ';
import classes from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = (props) => {
   return (
      <div className={classes.content}>

        <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
        <MyPostsContainer/>

      </div>
    )
}

export default Profile