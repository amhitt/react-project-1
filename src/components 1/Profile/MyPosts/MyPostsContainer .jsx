import React from "react"
import { addPostActionCreator, onPostChangeActionCreator } from "../../../redux/store"
import MyPosts from "./MyPosts"
import Post from "./Post/Post"


const MyPostsContainer = (props) => {
    let state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };
   
    let onPostChange = (text) => {
        let action = onPostChangeActionCreator(text)
        props.store.dispatch(action)
    }

    return (
        <MyPosts addPost={addPost} onPostChange={onPostChange} postsData={state.profilePage.postsData} newPostText={state.profilePage.newPostText}/>
    )
}

export default MyPostsContainer