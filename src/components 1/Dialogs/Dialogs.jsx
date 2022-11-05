import React from 'react';
import classes from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogsItem/DialogsItem';


const Dialogs = (props) => {

const dialogElements = props.dialogsPage.dialogsData.map((d) => <DialogItem name={d.name} key={d.index} id={d.id} photo={d.photo}/>)
const messageElements = props.dialogsPage.messagesData.map( (m) => <Message message={m.message} key={m.index} id={m.id}/>)

let newMessage = React.createRef()

let postNewMessage = () => {
    props.postNewMessage()
}

let onMessageChange = () => {
    let text = newMessage.current.value;
    props.onMessageChange(text)
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