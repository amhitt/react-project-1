const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST: 
            let newPost = {
            id: 6,
            message: state.newPostText,
            likes: 0
            }
            state.postsData.unshift(newPost)
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST_TEXT: 
            state.newPostText = action.newText
            return state
        default: 
        return state
    }
}
    

export default profileReducer