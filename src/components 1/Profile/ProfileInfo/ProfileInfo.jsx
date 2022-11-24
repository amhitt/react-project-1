import React from "react";
import classes from "./ProfileInfo.module.css";
import userPhoto from "./../../../assets/images/userPhoto.png";
import ProfileStatus from "./Profile-status";

const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        {props.profile && (
          <div className={classes.descriptionBlock}>
            <div className={classes.ava}>
              <img src={props.profile.photos.small != null ? props.profile.photos.small : userPhoto} alt="" />
            </div>
            <div className={classes.info}>
              <div>
                <h1>Hi, my name is {props.profile.fullName}</h1>
              </div>
              <div>
                <h3> {props.profile.aboutMe}</h3>
              </div>
              
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
              
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileInfo;

