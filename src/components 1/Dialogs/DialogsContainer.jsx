import React from 'react';
import classes from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogsItem/DialogsItem';
import { onMessageChangeActionCreator, postNewMessageActionCreator } from '../../redux/store';
import Dialogs from './Dialogs';


 

const DialogsContainer = (props) => {

let state = props.store.getState().dialogsPage

let postNewMessage = () => {
    props.store.dispatch(postNewMessageActionCreator())
}

let onMessageChange = (text) => {
    props.store.dispatch(onMessageChangeActionCreator(text))
}

    return (
       <Dialogs postNewMessage={postNewMessage} onMessageChange={onMessageChange} dialogsData={state.dialogsData} messagesData={state.messagesData} newMessageText={state.newMessageText}/>
    )
}

export default DialogsContainer 