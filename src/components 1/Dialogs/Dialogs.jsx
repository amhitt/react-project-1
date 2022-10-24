import React from 'react';
import classes from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogsItem/DialogsItem';


 

const Dialogs = (props) => {

const dialogElements = props.state.dialogsData.map((e) => <DialogItem name={e.name} id={e.id} photo={e.photo}/>)
const messageElements = props.state.messagesData.map( e => <Message message={e.message} id={e.id}/>)

let newMessage = React.createRef()

let postNewMessage = () => {
    let text = newMessage.current.value;
    props.sendNewMessage(text)
}

let onMessageChange = () => {
    let text = newMessage.current.value;
    props.updateMessage(text)
}

    return (
      
        <div className={classes.dialogs}>
           <div className={classes.dialogItems}>
                 { dialogElements }
           </div>

        
            <div className={classes.messages}>
                { messageElements }

                 <div>
                     <textarea onChange={onMessageChange} ref={newMessage}/>
                     <button onClick={postNewMessage}>Send message</button>
                 </div>       
            </div>
        </div>

    )
}

export default Dialogs 