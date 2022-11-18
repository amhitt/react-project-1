import {  applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux'
import authReducer from './auth-reducer'
import dialogsReducer from './dialogs-reducer'
import profileReducer from './profile-reducer'
import usersReducer from './users-reducer'
import thunkMidlware from 'redux-thunk'



let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
}) 

let store = createStore(reducers, applyMiddleware(thunkMidlware))

window.store = store

export default store