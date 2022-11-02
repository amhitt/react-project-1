import React from 'react';
import classes from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogsItem/DialogsItem';
import { onMessageChangeActionCreator, postNewMessageActionCreator } from '../../redux/store';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';


 

const DialogsContainer = () => {

    return <StoreContext.Consumer>
        { (store) => {
            let state = store.getState().dialogsPage

            let postNewMessage = () => {
                store.dispatch(postNewMessageActionCreator())
            }

            let onMessageChange = (text) => {
                store.dispatch(onMessageChangeActionCreator(text))
            }

                return <Dialogs
                    postNewMessage={postNewMessage}
                    onMessageChange={onMessageChange}
                    dialogsData={state.dialogsData}
                    messagesData={state.messagesData}
                    newMessageText={state.newMessageText}
                    />}
        }
</StoreContext.Consumer>
}


export default DialogsContainer 