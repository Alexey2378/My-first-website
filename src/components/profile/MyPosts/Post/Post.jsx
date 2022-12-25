import React from 'react';
import p from './Post.module.css';


const Post = (props) => {
    return (
        <div> 
            <div className={p.item}>
            <img src='https://www.planetware.com/wpimages/2019/11/canada-in-pictures-beautiful-places-to-photograph-morraine-lake.jpg'/>
               {props.message}
            </div>

        </div>
    );
}

export default Post;