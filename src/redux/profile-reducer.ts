import {profileAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {PhotosType, PostType, ProfileType} from "../types/types";

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
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: '',
    newPostText: ''
};

export type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: any):InitialStateType => {

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
                profile: {...state.profile, photos: action.photos} as ProfileType
            }
        }

        default:
            return state;
    }
}

type AddPostActionCreatorType = {
    type: typeof ADD_POST
    newPostText: string
}
export const addPostActionCreator = (newPostText: string): AddPostActionCreatorType => ({type: ADD_POST, newPostText})

type SetUserProfileType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}
export const setUserProfile = (profile: ProfileType):SetUserProfileType => ({type: SET_USER_PROFILE, profile})

type SetStatusType = {
    type: typeof SET_STATUS
    status: string
}
export const setStatus = (status: string):SetStatusType => ({type: SET_STATUS, status})

type SavePhotoSuccessType = {
    type: typeof SAVE_PHOTO_SUCCESS
    photos: PhotosType
}
export const savePhotoSuccess = (photos: PhotosType):SavePhotoSuccessType => ({type: SAVE_PHOTO_SUCCESS, photos})
export const sendProfileInfo = (photos: PhotosType) => ({type: SEND_PROFILE_INFO})



export const getStatus = (userId: number) => {
    return (dispatch: any) => {
        profileAPI.getStatus(userId).then((response: any) => {
            dispatch(setStatus(response.data));
        });
    }
}

export const updateStatus = (status: string) => {
    return (dispatch: any) => {
        profileAPI.updateStatus(status)
            .then((response: any) => {
                if (response.data.resultCode === 0){
                    dispatch(setStatus(status));
                }
        });
    }
}


export const setProfile = (userId: number) => {
    return (dispatch: any) => {
        usersAPI.getProfile(userId)
            .then((response: any) => {
            dispatch(setUserProfile(response.data));
        });
    }
}



export const savePhoto = (file: any) => async (dispatch: any) => {
    let response = await profileAPI.savePhoto(file);

    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}


export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
    let response = await profileAPI.saveProfile(profile);
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