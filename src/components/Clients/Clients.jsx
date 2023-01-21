import axios from 'axios';
import React from 'react';
import styles from './clients.module.css'
import userPhoto from '../../assets/images/imageses.png';

let Clients = (props) => {

    if (props.clients.length === 0) {

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setClients(response.data.items);
        });


    }

    return <div>
        {
            props.clients.map(c => <div key={c.id}>
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



export default Clients;