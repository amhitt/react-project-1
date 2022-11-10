import React from 'react';
import { connect } from "react-redux"
import { addPost, onPostChange } from '../../../redux/profile-reducer';
import MyPosts from "./MyPosts"


let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
        newPostText: state.profilePage.newPostText
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         addPost: () => {
//             dispatch (addPostActionCreator())
//         },
//         onPostChange: (text) => {
//             let action = onPostChangeActionCreator(text)
//             dispatch (action)
//         }
//     }
//}

const MyPostsContainer = connect (mapStateToProps, {addPost, onPostChange}) (MyPosts)


export default MyPostsContainer