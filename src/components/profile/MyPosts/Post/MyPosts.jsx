import React from 'react';
import p from './Post.module.css';
import Post from './Post';


const MyPosts = () => {
    return (
        <div>
            <div>
                Write me
            </div>
            <textarea></textarea>

            <button>SEND</button>
            <Post message = 'Hello,how are you' />
            <Post message = 'It is my first post'/>
        </div>
    );
}

export default MyPosts;