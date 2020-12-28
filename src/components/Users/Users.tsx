import React from 'react';
import s from "./Users.module.css";
import User from "./User";
import {UserType} from "../../types/types";

type PropsTypes = {
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followingInProgress: Array<number>
}

let Users: React.FC<PropsTypes> = (props) => {
    return <div className={s.users}>

        {
            props.users.map(u => <User user={u}
                                       key={u.id}
                                       followingInProgress={props.followingInProgress}
                                       follow={props.follow}
                                       unfollow={props.unfollow}/>
            )
        }
    </div>
}

export default Users;