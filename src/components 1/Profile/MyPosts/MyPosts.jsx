import React from "react"
import { addPostActionCreator, onPostChangeActionCreator } from "../../../redux/state"
import classes from './MyPosts.module.css'
import Post from "./Post/Post"


const MyPosts = (props) => {

    const postsElements = props.postsData.map(e => <Post id={e.id} message={e.message} likes={e.likes}/>)

    let newPostElement = React.createRef();


    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };
   
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(onPostChangeActionCreator(text))
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>
                        Add post!
                    </button>
                </div>
            </div>
            <div className={classes.posts}>
                { postsElements }
            </div>   
        </div>   

    )
}

export default MyPosts