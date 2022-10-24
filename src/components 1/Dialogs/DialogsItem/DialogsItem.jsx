import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './DialogsItem.module.css';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id
         return (
            <div className={classes.dialog}>
                <NavLink to={path}>
                        {props.name} 
                    <div>
                         <img src={props.photo}></img> 
                    </div>
                </NavLink> 
            </div>   
        )
}


export default DialogItem