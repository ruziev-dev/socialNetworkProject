import {profileAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';
const SEND_PROFILE_INFO = 'SEND_PROFILE_INFO';


let initialState = {
    posts: [
        {id: 1, message: 'Привет мир! Это мой первый пост!', likesCount: 12},
        {id: 2, message: 'Как дела?', likesCount: 11},
        {id: 3, message: 'Бла бла...', likesCount: 11},
        {id: 4, message: 'Oh myyy...', likesCount: 3},
        {id: 5, message: 'Максимальная длина поста ограничена 100 символами', likesCount: 5}
    ],
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: 6,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }

        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }

        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }

        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        }

        default:
            return state;
    }
}


export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})
export const sendProfileInfo = (photos) => ({type: SEND_PROFILE_INFO})



export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setStatus(response.data));
        });
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0){
                    dispatch(setStatus(status));
                }
        });
    }
}


export const setProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId)
            .then(response => {
            dispatch(setUserProfile(response.data));
        });
    }
}



export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);

    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}


export const saveProfile = (formData) => async (dispatch, getState) => {
    let response = await profileAPI.saveProfile(formData);
    if (response.data.resultCode === 0) {
       const userId =  getState().auth.userId
        dispatch(setProfile(userId))
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some Error";
        dispatch(stopSubmit("editProfile", {_error: message}));
        return Promise.reject();
    }

}



export default profileReducer;