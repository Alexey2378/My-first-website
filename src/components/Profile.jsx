import React from 'react';
import p from'./Profile.module.css'


const Profile = () => {
    return (
        <div className={p.content}>
            <div>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQArKGi9V1VGKrZhC3IKIuXCC7X3xhjzfJJnQ&usqp=CAU' />
            </div>
            <div>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnnnObTCNg1QJoEd9Krwl3kSUnPYTZrxb5Ig&usqp=CAU/' />
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
            </div>
            <div>
                New posts
            </div>
            <div className={p.item}>
                post 1
            </div>
            <div className={p.item}>
                post 2
            </div>
        </div>
    );
}

export default Profile;