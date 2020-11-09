import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
    return <header className={s.header}>
        <img src='https://www.seekpng.com/png/full/872-8723815_digital-marketing-services-digital-marketing-png-icons.png' />

        <div className={s.loginBlock}>
            {props.isAuth
                ? <div>{props.login}<br/> <button onClick={props.logout}>Log out</button></div>
                :<NavLink to={'/login'}>Login</NavLink>
            }
         </div>
    </header>
}

export default Header;