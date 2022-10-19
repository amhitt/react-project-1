import React from 'react';
import classes from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogsItem/DialogItem';


 

const Dialogs = (props) => {

    // поправь отступы мать. объявляй переменные через const 

let dialogsData = [
    {id: '1', name: 'Edmon'},
    {id: '2', name: 'Sasha'},
    {id: '3', name: 'Nastya'},
    {id: '4', name: 'Mamochka'},
    {id: '5', name: 'Lika'}
]
    
const dialogElements = dialogsData.map((e) => <DialogItem name={e.name} id={e.id}/>)

let messagesData = [
    {id: '1', message: 'Hi'},
    {id: '2', message: 'How r u'},
    {id: '3', message: 'Bye'},
    {id: '4', message: 'Bye'},
    {id: '5', message: 'Bye'},
    {id: '6', message: 'Bye'},
    {id: '7', message: 'Bye'},
    {id: '8', message: 'Bye'},
]

const messageElements = messagesData.map( e => <Message message={e.message} id={e.id}/>)

    return (
        <div className={classes.dialogs}>
           <div className={classes.dialogItems}>
                 { dialogElements }
           </div>

        
            <div className={classes.messages}>
                { messageElements }
            </div>
        </div>
    )
}

export default Dialogs 