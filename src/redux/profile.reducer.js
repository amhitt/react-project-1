const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postsData: [
        {id: 1, message:"Hi, I`ve just learnt about props!", likes: 1},
        {id: 2, message:"Please like my posts and subscribe to this account", likes: 2},
        {id: 3, message:"Wazzzaaaaapppp", likes: 0},
        {id: 4, message:"Wazzzaaaaapppp", likes: 0},
        {id: 5, message:"Wazzzaaaaapppp", likes: 0},
    ],
 newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
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
        case UPDATE_NEW_POST_TEXT:
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText
            return stateCopy
        default: 
        return state
    }
}
    

export default profileReducer