import React from 'react';
import { connect } from "react-redux"
import { addPostActionCreator, onPostChangeActionCreator } from "../../../redux/store"
import MyPosts from "./MyPosts"


let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch (addPostActionCreator())
        },
        onPostChange: (text) => {
            let action = onPostChangeActionCreator(text)
            dispatch (action)
        }
    }
}

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps) (MyPosts)


export default MyPostsContainer