import React from 'react';
import p from './Post.module.css';
import Post from './Post';


const MyPosts = (props) => {

    let posts = [
        { id: 1, message: 'Hello,how are you' },
        { id: 2, message: 'It is my first post' }
    ]

    let PostsElements = posts.map((p) => <Post message={p.message} id={p.id} />)

    return (
        <div className={p.postsBlock}>
            <div>
                <h3>Write me</h3>
            </div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>SEND</button>
            </div>
            <div>
                {PostsElements}
            </div>
        </div>
    );
}

export default MyPosts;