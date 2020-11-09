import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControl/FormsControls";
import {maxLenghtCreator, required} from "../../utils/validators/validators";

let maxLenght50 = maxLenghtCreator(50);

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>);

    let addNewMessage = (value) => {
        props.sendMessage(value.newMessageBody);
        value.newMessageBody='';
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div className={s.messageForm}>
                    <AddMessageFormRedux onSubmit={addNewMessage}/>
                </div>
            </div>

        </div>
    )
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name="newMessageBody"
                       validate={[required, maxLenght50]}
                       placeholder="Enter your message"
                       className={s.textarea}
                />
            </div>
            <div>
                <button className={s.button}>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);

export default Dialogs;