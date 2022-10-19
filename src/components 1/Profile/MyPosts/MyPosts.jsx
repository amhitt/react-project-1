import React from "react"
import classes from './MyPosts.module.css'
import Post from "./Post/Post"


const MyPosts = (props) => {

    const postsElements = props.postsData.map(e => <Post id={e.id} message={e.message} likes={e.likes}/>)

    return (
        <div className={classes.postsBlock}>
            <h3>My poosts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>
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