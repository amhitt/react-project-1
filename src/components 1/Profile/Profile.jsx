import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = () => {
    return (
      <div className={classes.content}>
        <ProfileInfo/>

        <div>
          My posts
        </div>

        <MyPosts/>


      </div>
    )
}

export default Profile