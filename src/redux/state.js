
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
    addPost () {
    let newPost = {
        id: 6,
        message: this._state.profilePage.newPostText,
        likes: 0
    }
    this._state.profilePage.postsData.unshift(newPost)
    this._state.profilePage.newPostText = ''
    this._callSubscriber(this._state);
    },
    updateNewPostText (newText)  {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    sendNewMessage (yourMessage) {
        let newMessage = {
            id: 8,
            message: yourMessage
        }
        this._state.dialogsPage.messagesData.push(newMessage)
        this._callSubscriber(this._state);
    },
    updateMessage (newLetter) {
        this._state.dialogsPage.newMessageText = newLetter
        this._callSubscriber(this._state)
    },
    subscribe (observer) {
        this._callSubscriber = observer
    }
}


export default store;
