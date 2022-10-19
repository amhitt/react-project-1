import React from "react"
import classes from './MyPosts.module.css'
import Post from "./Post/Post"


const MyPosts = () => {
    const postsData = [
        {id:'1', message:"Hi, I`ve just learnt about props!", likes:'1'},
        {id:'2', message:"Please like my posts and subscribe to this account", likes:'2'},
        {id:'3', message:"Wazzzaaaaapppp", likes:'0'},
    ]

    const postsElements = postsData.map(e => <Post id={e.id} message={e.message} likes={e.likes}/>)

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