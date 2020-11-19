import React, {useEffect, useState} from "react";

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false );
    let [status,setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status)
    }, [props.status]);

    const activateEditMode = () => {
        props.isOwner ? setEditMode(true) : setEditMode(false);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }
        return (
            <>
                {!editMode &&
                    <div>
                        <i><span onDoubleClick={activateEditMode}>{props.status || "-------"}</span></i>
                    </div>
                }
                {editMode &&
                    <div>
                        <input value={status}
                               defaultValue={status}
                               onChange={onStatusChange}
                               autoFocus={true}
                               onBlur={deactivateEditMode}
                        />
                    </div>
                }
            </>
        )

}

export default ProfileStatusWithHooks;