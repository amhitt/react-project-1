import React from "react"
import classes from './MyPosts.module.css'
import Post from "./Post/Post"


const MyPosts = (props) => {

    const postsElements = props.profilePage.postsData.map(e => <Post id={e.id} message={e.message} likes={e.likes}/>)

    let newPostElement = React.createRef();


    let addPost = () => {
        props.addPost()
  
    };
   
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.onPostChange(text)
  
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.profilePage.newPostText}/>
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