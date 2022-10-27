import React from 'react';
import './App.css';
import Dialogs from './components 1/Dialogs/Dialogs';
import Header from './components 1/Header/Header';
import Navbar from './components 1/Navbar/Navbar';
import Profile from './components 1/Profile/Profile';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Music from './components 1/Music/Music';
import News from './components 1/News/News';
import Settings from './components 1/Settings1/Settings';


const App = (props) => {
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'> 
        <Routes> 
          <Route  path='/profile' element={<Profile 
              profilePage={props.state.profilePage} 
              newPostText={props.state.newPostText}
              dispatch={props.dispatch}/>}/>
          <Route  path='/dialogs/*' element={<Dialogs 
              dialogsPage={props.state.dialogsPage} 
              newMessageText={props.state.dialogsPage.newMessageText}
              dispatch={props.dispatch} />}/>
          <Route  path='/music' element={<Music/>}/>
          <Route  path='/news' element={<News/>}/>
          <Route  path='/settings' element={<Settings/>}/>
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App


 