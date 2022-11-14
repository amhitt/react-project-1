import React from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';



const Navbar = () => {
  return (
    <nav className={classes.nav}>
        <div className={classes.item}> 
          <NavLink to='/profile'>Profile</NavLink>
         </div>
        <div> 
          <NavLink to='/dialogs' className={`${classes.item} ${classes.active}`}>Messages</NavLink> </div>
        <div> 
          <NavLink to='/news' className={classes.item}>News</NavLink> </div>
        <div> 
          <NavLink to='/music' className={classes.item}>Music</NavLink> </div>
        <div>
           <NavLink to='/settings' className={classes.item}>Settings</NavLink> </div>
        <div>
           <NavLink to='/users' className={classes.item}>Users</NavLink> </div>
      </nav>
  )
}


export default Navbar
