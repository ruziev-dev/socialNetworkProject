import React, {useState} from 'react';
import Preloader from '../../common/Preloader/preloader';
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataFormReduxForm from "./ProfileDataForm";
import Ava from "../../common/Avatar/Avatar";


const ProfileInfo = (props) => {
    const [editMode, setEditMode] = useState(false)

    const onSubmit = (formData) => {
        props.saveProfile(formData)
            .then(() => {
                setEditMode(false)
            })

    }

    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }
    return (
        <div>
            <div className={s.descriptionBlock}>

                <div className={s.ava}>
                    <Ava isLarge={true} photos={props.profile.photos}/>

                    {props.isOwner &&
                    <input type={"file"}
                           onChange={onMainPhotoSelected}
                           accept={".jpg, .jpeg, .png"}
                    />
                    }
                </div>
                {editMode
                    ? <ProfileDataFormReduxForm initialValues={props.profile} {...props} onSubmit={onSubmit}/>
                    : <ProfileData {...props} setEditMode={setEditMode}/>
                }

            </div>

        </div>
    )
}

const Contact = ({contactTitle, contactValue}) => {
    return <div><b>{contactTitle}: </b> {contactValue}</div>
}

const ProfileData = (props) => {
    return <div className={s.profileDescription}>
        <div>
            {props.isOwner &&
            <button onClick={() => {
                props.setEditMode(true)
            }}>Редактировать</button>}

            <p><b>{props.profile.fullName}</b></p>

            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} isOwner={props.isOwner}/>

            <p><b>Обо мне: </b>{props.profile.aboutMe}</p>
            <b>В поиске работы: </b>{props.profile.lookingForAJob
            ? "да"
            : "нет"}
            <br/>
            {props.profile.lookingForAJob
                ? <p><b>Скиллы: </b> {props.profile.lookingForAJobDescription}</p>
                : null}
            <div>
                <p><b>Контактная информация</b></p>
                {Object.keys(props.profile.contacts).map(key => {
                    return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
                })}
            </div>
        </div>
    </div>
}


export default ProfileInfo;