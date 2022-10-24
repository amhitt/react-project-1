let rerenderEntireTree = () => {
    console.log('state changed')
}

const state = {
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

}

export let addPost = () => {
    let newPost = {
        id: 6,
        message: state.profilePage.newPostText,
        likes: 0
    }
    state.profilePage.postsData.unshift(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}

export let sendNewMessage = (yourMessage) => {
    let newMessage = {
        id: 8,
        message: yourMessage
    }
    state.dialogsPage.messagesData.push(newMessage)
    rerenderEntireTree(state);
}

export const  updateMessage = (newLetter) => {
    state.dialogsPage.newMessageText = newLetter
    rerenderEntireTree(state)
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer
}
export default state