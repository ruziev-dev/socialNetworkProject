import React from 'react';
import userPhoto from "../../../assets/images/defaultAvatar.png";
import s from './Ava.module.css'

export const Ava = (props) => {
    return <img className={props.isLarge ? s.large : s.small}
                src={props.photos ? props.photos.large ? props.photos.large : userPhoto : userPhoto}/>

}

export default Ava