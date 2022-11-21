import React from 'react';
import './App.css';
import Navbar from './components 1/Navbar/Navbar';
import Music from './components 1/Music/Music';
import News from './components 1/News/News';
import Settings from './components 1/Settings1/Settings';
import DialogsContainer from './components 1/Dialogs/DialogsContainer';
import UsersContainer from './components 1/Users/UsersContainer';
import ProfileContainer from './components 1/Profile/ProfileContainer';
import { BrowserRouter, Route  } from 'react-router-dom';
import HeaderContainer from './components 1/Header/HeaderContainer';
import Login from './components 1/Login/Login';



const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'> 
            <Route  path='/profile/:userId?' render={() => <ProfileContainer/>}/>
            <Route  path='/dialogs' render={() => <DialogsContainer/>}/>
            <Route  path='/music' component={Music}/>
            <Route  path='/news' component={News}/>
            <Route  path='/settings' component={Settings}/>
            <Route  path='/users' render={() => <UsersContainer/>}/>
            <Route  path='/login' render={() => <Login/>}/>
 
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App


 