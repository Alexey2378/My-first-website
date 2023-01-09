import React from 'react';
import p from './Post.module.css';
import Post from './Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';



const MyPosts = (props) => {

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
        <div className={p.postsBlock}>
            <div>
                <h3>Write me</h3>
            </div>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement}
                    value={props.newPostText} />
            </div>
            <div>
                <button onClick={addPost}>SEND</button>
            </div>
            <div>
                {PostsElements}
            </div>
        </div>
    );
}

export default MyPosts;