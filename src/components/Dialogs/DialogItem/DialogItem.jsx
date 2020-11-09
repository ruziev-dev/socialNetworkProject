import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";
import Ava from "../../common/Avatar/Avatar";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return <NavLink to={path}>
        <div className={s.item}>
            <Ava/>
            {props.name}
        </div>
    </NavLink>


}

export default DialogItem;