import React, {useState} from 'react';
import s from './Post.module.css';
import Ava from "../../../common/Avatar/Avatar";

const Post = (props) => {
    let [likes, setLikes] = useState(props.likesCount)
    return (
        <div className={s.item}>
            <Ava isLarge={false} photos={props.photos}/>
            {props.message}
            <div>
                <button onClick={() => setLikes(likes + 1)}>Like {likes}</button>

            </div>
        </div>
    )
}

export default Post;