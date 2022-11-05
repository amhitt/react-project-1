import React from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';


const activeClass = ({isActive}) => isActive ? classes.activeLink : classes.item

const Navbar = () => {
  return (
    <nav className={classes.nav}>
        <div> 
          <NavLink to='/profile' className={activeClass}>Profile</NavLink>
         </div>
        <div> 
          <NavLink to='/dialogs' className={activeClass}>Messages</NavLink> </div>
        <div> 
          <NavLink to='/news' className={activeClass}>News</NavLink> </div>
        <div> 
          <NavLink to='/music' className={activeClass}>Music</NavLink> </div>
        <div>
           <NavLink to='/settings' className={activeClass}>Settings</NavLink> </div>
        <div>
           <NavLink to='/users' className={activeClass}>Users</NavLink> </div>
        
        {/* <div className='FriendsBlock'>
          <div>Friends</div>
          <div className='frindsList'>
            <div>
              Name
            </div>
          </div>
         </div> */}
      </nav>
  )
}


export default Navbar
