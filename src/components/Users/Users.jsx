import React from 'react';
import s from "./Users.module.css";
import User from "./User";

let Users = (props) => {
    return <div className={s.users}>

        {
            props.users.map(u => <User user={u}
                                       key={u.id}
                                       followingInProgress={props.followingInProgress}
                                       follow={props.follow}
                                       unfollow={props.unfollow} />
                                       )
        }
    </div>
}

export default Users;