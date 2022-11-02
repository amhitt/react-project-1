import React from "react"
import { addPostActionCreator, onPostChangeActionCreator } from "../../../redux/store"
import StoreContext from "../../../StoreContext"
import MyPosts from "./MyPosts"
import Post from "./Post/Post"


const MyPostsContainer = () => 
{   return  <StoreContext.Consumer> 
    { (store) => {  
                let state = store.getState()
                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                };
            
                let onPostChange = (text) => {
                    let action = onPostChangeActionCreator(text)
                    store.dispatch(action)
                }

                return  <MyPosts 
                            addPost={addPost} 
                            onPostChange={onPostChange}
                            postsData={state.profilePage.postsData} 
                            newPostText={state.profilePage.newPostText}
                        />}
            }
                    </StoreContext.Consumer>
}

export default MyPostsContainer