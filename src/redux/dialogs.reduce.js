const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';


const dialogsReducer = (state, action) => {
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