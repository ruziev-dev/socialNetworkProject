import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLenghtCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControl/FormsControls";

const maxLenght10 = maxLenghtCreator(100);

const MyPosts = React.memo(props => {
    let postsElements =
        [...props.posts].reverse().map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>);
    let onAddPost = (value) => {
        props.addPost(value.newPostText)
        value.newPostText = ''
    }

    return (
        <div className={s.postsBlock}>
            <h3>Мои посты:</h3>
            {props.isOwner && <AddNewPostFormRedux onSubmit={onAddPost}/>}
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
});

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newPostText" component={Textarea}
                       type="text" validate={[required, maxLenght10]}
                       placeholder="Введите текст нового поста"
                       className={s.textarea}
                />
            </div>
            <div>
                <button>Опубликовать</button>
            </div>
        </form>
    )
}

let AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);

export default MyPosts;