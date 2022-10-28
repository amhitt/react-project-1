import React from 'react';
import classes from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogsItem/DialogsItem';
import { onMessageChangeActionCreator, postNewMessageActionCreator } from '../../redux/store';


 

const Dialogs = (props) => {

const dialogElements = props.dialogsPage.dialogsData.map((e) => <DialogItem name={e.name} id={e.id} photo={e.photo}/>)
const messageElements = props.dialogsPage.messagesData.map( (e) => <Message message={e.message} id={e.id}/>)

let newMessage = React.createRef()

let postNewMessage = () => {
    props.dispatch(postNewMessageActionCreator())
}

let onMessageChange = () => {
    let text = newMessage.current.value;
    props.dispatch(onMessageChangeActionCreator(text))
}

    return (
        <div className={classes.dialogs}>
           <div className={classes.dialogItems}>
                 { dialogElements }
           </div>

            <div className={classes.messages}>
                { messageElements }
                 <div>
                     <textarea onChange={onMessageChange} ref={newMessage} value={props.newMessageText} placeholder='Enter your message...'/>
                     <button onClick={postNewMessage}>Send message</button>
                 </div>       
            </div>
        </div>
    )
}

export default Dialogs 