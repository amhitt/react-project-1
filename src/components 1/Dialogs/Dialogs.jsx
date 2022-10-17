import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';

const DialogItems = (props) => {
    let path = "/dialogs/" + props.id
    return (
        
         <div className={classes.dialog}>
              <NavLink to={path} >{props.name}</NavLink> 
         </div>   
    )
}

const Message = (props) => {
    return (
        <div className={classes.message}>
                    {props.message}
                </div> 
    )
}

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
           <div className={classes.dialogItems}>
                <DialogItems name="Edmon" id='1'/>
                <DialogItems name="Sasha" id='2'/>
                <DialogItems name="Nastya" id='3'/>
                <DialogItems name="Mamochka" id='4'/>
                <DialogItems name="Lika" id='5'/>
           </div>
            <div className={classes.messages}>
               <Message message="Hi"/>
               <Message message="How r u"/>
               <Message message="Bye"/>
            </div>
        </div>
    )
}

export default Dialogs 