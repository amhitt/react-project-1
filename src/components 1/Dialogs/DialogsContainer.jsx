import React from 'react';
import { onMessageChangeActionCreator, postNewMessageActionCreator } from '../../redux/store';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import { compose } from 'redux';


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        newMessageText: state.dialogsPage.newMessageText,

    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        postNewMessage: () => {
            dispatch(postNewMessageActionCreator())
        },
        onMessageChange: (text) => {
            dispatch(onMessageChangeActionCreator(text))
        }
    }
}


export default  compose(
    connect (mapStateToProps, mapDispatchToProps),
    withAuthRedirect) (Dialogs)