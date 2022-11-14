import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';


const Header = (props) => {
    return (
        <header className={classes.header}>
        <img src='https://images.unsplash.com/photo-1605859465655-84c45e14a0af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80'/> 
        <div className={classes.auth}>
          {props.isAuth ? props.login:
            <NavLink to={'/login'}>Log in</NavLink>}
          </div>
      </header>
    )

}

export default Header