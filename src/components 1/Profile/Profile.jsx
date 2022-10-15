import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css'


const Profile = () => {
    return (
      <div className={classes.content}>
      <div>
        <img src='https://images.unsplash.com/photo-1635198103839-0f0b45154276?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'/>
      </div>

      <div>
        ava+descripton
      </div>
      <div>
        My posts
      </div>
      <div>
        New post
      </div>
      <MyPosts/>
    </div>
    )

}

export default Profile