const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';

let initialState = {
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

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
    case  SEND_NEW_MESSAGE: 
        let newMessage = {
        id: 8,
        message: state.newMessageText
    }
        state.messagesData.push(newMessage)
        state.newMessageText = ''
        return state
    case UPDATE_MESSAGE:  
        state.newMessageText = action.newLetter
        return state
    default: 
        return state
    }
}


export default dialogsReducer