import React from "react"
import classes from './MyPosts.module.css'
import Post from "./Post/Post"


const MyPosts = () => {
    return (
    <div className={classes.posts}>
        <Post message='Hi, I`ve just learnt about props!' likes='5'/>
        <Post message='Please like my posts and subscribe to this account' likes='10'/>
     </div>   
    )
}

export default MyPosts