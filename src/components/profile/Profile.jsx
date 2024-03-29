import React from 'react';
import Biography from './Biography';
import MyPosts from './MyPosts/Post/MyPosts';
import MyPostsContainer from './MyPosts/Post/MyPostsContainer';
import p from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo />
            <div className={p.ava}>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvjI9clQ7L8MlKb5KinjqtTUQNnULrlt7VGA&usqp=CAU' />
                <div>
                    <Biography name='Rena P.' />
                    <Biography age='34' />
                    <Biography city='Charkiw' />
                </div>
            </div>
            <MyPostsContainer store={props.store} />
        </div>
    );
}

export default Profile;