import React from 'react';
import classes from './ProfileInfo.module.css'


const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src='https://images.unsplash.com/photo-1635198103839-0f0b45154276?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'/>
      </div>
      <div className={classes.descriptionBlock}>
        ava+description
      </div>
      
 
    </div>
    )
}

export default ProfileInfo