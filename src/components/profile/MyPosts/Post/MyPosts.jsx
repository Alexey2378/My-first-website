import React from 'react';
import p from './Post.module.css';
import Post from './Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';



const MyPosts = (props) => {

    let PostsElements = props.posts.map((p) => <Post message={p.message} id={p.id} />)

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
        

    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
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
                <button onClick={onAddPost}>SEND</button>
            </div>
            <div>
                {PostsElements}
            </div>
        </div>
    );
}

export default MyPosts;