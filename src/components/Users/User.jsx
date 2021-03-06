import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/images/defaultAvatar.png";
import {NavLink} from 'react-router-dom';
import {UserType} from "../../types/types";

/*type PropsType = {
    user: Array<UserType>
    followingInProgress: Array<number>
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    key: number
}*/

let User /*: React.FC<PropsType> */= ({user, followingInProgress, unfollow, follow}) => {
    return (
        <div className={s.userItem}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>

                            <img src={user.photos.small != null
                                ? user.photos.small
                                : userPhoto}/>
                        </NavLink>
                    </div>
                    <div>

                        {user.followed
                            ? <button disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => {
                                          unfollow(user.id);
                                      }}> Unfollow</button>

                            : <button disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => {
                                          follow(user.id)
                                      }}>Follow</button>}
                    
                    </div>
                </span>
            <span>
                <div>{user.name}</div>
            </span>
        </div>)

}


export default User;