import React from 'react';
import styles from './users.module.css'
import userPhoto from '../../assets/images/imageses.png';

let Users = (props) => {

    let pagesCount = Math.ceil (props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

   
    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && styles.selectedPage}
                    onClick={(e) => { props.onPageChanged(p); }}>{p}</span>
            })}
        </div>
        {
            props.users.map(c => <div key={c.id}>
                <span>
                    <div>
                        <img src={c.photos.small != null ? c.photos.small : userPhoto} className={styles.clientPhoto} />
                    </div>
                    <div>
                        {c.followed
                            ? <button onClick={() => { props.unfollow(c.id) }}>Unfollow</button>
                            : <button onClick={() => { props.follow(c.id) }}>follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{c.name}</div>
                        <div>{c.status}</div>
                    </span>
                    <span>
                        <div>{"c.location.country"}</div>
                        <div>{"c.location.city"}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;