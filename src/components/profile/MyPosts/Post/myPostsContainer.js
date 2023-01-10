import React from 'react';
import p from './Post.module.css';
import Post from './Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';



const myPostsContainer = (props) => {

    let PostsElements = props.posts.map((p) => <Post message={p.message} id={p.id} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());

    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text)
        props.dispatch(action);
    }

    return (
       <MyPosts/>
    );
}

export default myPostsContainer;