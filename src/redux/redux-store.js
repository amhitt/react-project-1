import {  combineReducers, legacy_createStore as createStore} from 'redux'
import dialogsReducer from './dialogs.reduce'
import profileReducer from './profile.reduce'


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
}) 

let store = createStore(reducers)

export default store