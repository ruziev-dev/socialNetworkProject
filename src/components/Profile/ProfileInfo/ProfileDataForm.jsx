import React from 'react';
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import {Field, reduxForm} from "redux-form";

const ProfileDataForm = (props) => {

    return <div className={s.profileDescription}>
        <form onSubmit={props.handleSubmit} className={s.formMain}>
            <div className={s.formChild}>

                <button>Сохранить</button>
                {props.error && <div className={s.formSummaryError}> {props.error}</div>}
                <p><Field name="fullName" component="input" /></p>

                <ProfileStatusWithHooks status={props.status} />

                <p><b>Обо мне: </b></p>
                <Field name="aboutMe" component="textarea" />
                <br/>
                <b>В поиске работы: </b>
                <Field name="lookingForAJob" component="input" type="checkbox"/>
                <p><b>Скиллы: </b></p>
                <Field name="lookingForAJobDescription" component="textarea"/>

            </div>
            <div className={s.formChild}>
                <p><b>Контактная информация</b></p>
                {Object.keys(props.profile.contacts).map(key => {
                    return <div className={s.contactItem}>
                        <b>{key}: </b><br/>
                        <Field name={"contacts." + key} component="input" placeholder={key}/>
                    </div>
                })}
            </div>
        </form>
    </div>

}

const ProfileDataFormReduxForm = reduxForm({form: 'editProfile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;