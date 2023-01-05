import React from 'react';
import p from './Post.module.css';
import Post from './Post';


const MyPosts = (props) => {

    let PostsElements = props.posts.map((p) => <Post message={p.message} id={p.id} />)

let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch({ type: 'ADD-POST'});
        
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: text});
    }

    return (
        <div className={p.postsBlock}>
            <div>
                <h3>Write me</h3>
            </div>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} 
                value={props.newPostText}/> 
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