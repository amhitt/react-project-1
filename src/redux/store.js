import dialogsReducer from "./dialogs.reduceк";
import profileReducer from "./profile.reducer";

 export let addPostActionCreator = () => ({type: ADD_POST})
 export let onPostChangeActionCreator = (text) => ({  
        type: UPDATE_NEW_POST_TEXT, newText: text
})
export let postNewMessageActionCreator = () => ({type: SEND_NEW_MESSAGE})   
export let onMessageChangeActionCreator = (text) => ({
        type: UPDATE_MESSAGE, newLetter: text
})


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';

const store = {
     _state: {
    profilePage: {
            postsData: [
                {id: 1, message:"Hi, I`ve just learnt about props!", likes: 1},
                {id: 2, message:"Please like my posts and subscribe to this account", likes: 2},
                {id: 3, message:"Wazzzaaaaapppp", likes: 0},
                {id: 4, message:"Wazzzaaaaapppp", likes: 0},
                {id: 5, message:"Wazzzaaaaapppp", likes: 0},
            ],
         newPostText: ''
        },

    dialogsPage: {
        messagesData: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How r u'},
            {id: 3, message: 'Bye'},
            {id: 4, message: 'Bye'},
            {id: 5, message: 'Bye'},
            {id: 6, message: 'Bye'},
            {id: 7, message: 'Bye'},
            {id: 8, message: 'Bye'},
        ],
        newMessageText: '',
        dialogsData: [  
            {id: 1, name: 'Edmon', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK2nG24AYDm6FOEC7jIfgubO96GbRso2Xshu1f8abSYQ&s'},
            {id: 2, name: 'Sasha'},
            {id: 3, name: 'Nastya'},
            {id: 4, name: 'Mamochka'},
            {id: 5, name: 'Lika'}
        ]
    }

    },
    getState () {
        return this._state
    },
     _callSubscriber ()  {
    console.log('state changed')
    },
    subscribe (observer) {
        this._callSubscriber = observer
    }, 

    dispatch(action) {
        profileReducer(this._state.profilePage, action)
        dialogsReducer(this._state.dialogsPage, action)
        
        this._callSubscriber(this._state)
    }
}

export default store;
