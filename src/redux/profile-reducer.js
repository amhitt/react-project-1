import { usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE'

let initialState = {
    postsData: [
        {id: 1, message:"Hi, I`ve just learnt about props!", likes: 1},
        {id: 2, message:"Please like my posts and subscribe to this account", likes: 2},
        {id: 3, message:"Wazzzaaaaapppp", likes: 0},
        {id: 4, message:"Wazzzaaaaapppp", likes: 0},
        {id: 5, message:"Wazzzaaaaapppp", likes: 0},
    ],
    newPostText: '',
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case ADD_POST: {
            let newPost = {
            id: 6,
            message: state.newPostText,
            likes: 0
            }
            let stateCopy = {...state}
            stateCopy.postsData = [...state.postsData]
            stateCopy.postsData.unshift(newPost)
            stateCopy.newPostText = ''
            return stateCopy
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText
            return stateCopy
        }
        default: 
        return state
    }
}
    
export const addPost = () => ({type: ADD_POST})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile: profile})
export const onPostChange = (text) => ({  
       type: UPDATE_NEW_POST_TEXT, newText: text
})

export const showProfile = (userId) => {
  return (dispatch) => {
    usersAPI.showUserProfile(userId).then((response) => {
        dispatch(setUserProfile(response.data));
      }); 
    }
}
export default profileReducer