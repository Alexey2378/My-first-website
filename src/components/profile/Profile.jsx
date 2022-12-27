import React from 'react';
import Biography from './Biography';
import MyPosts from './MyPosts/Post/MyPosts';
import p from './Profile.module.css'

const Profile = () => {
    return (
        <div>
            <div className={p.content}>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLoSGizcbJcVF6u7N5iYeImBdcUvCVtEdYDQ&usqp=CAU' />
            </div>
            <div className={p.ava}>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvjI9clQ7L8MlKb5KinjqtTUQNnULrlt7VGA&usqp=CAU' />
                <div>
                <Biography name='Rena P.' />
                <Biography age='34' />
                <Biography city='Charkiw' />
                </div>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;