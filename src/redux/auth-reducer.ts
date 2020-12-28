import {authAPI, ResultCodeEnum} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA';
const SET_CAPTCHA_URL = 'samurai-network/auth/SET_CAPTCHA_URL';

export type InitialStateType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
    captchaUrl: string | null
}

let initialState: InitialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
};

const authReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        case SET_CAPTCHA_URL:
            return {
                ...state,
                captchaUrl: action.url
            }

        default:
            return state;
    }
}

type SetAuthUserDataActionPayloadType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

type SetAuthUserDataActionType = {
    type: typeof SET_USER_DATA,
    payload: SetAuthUserDataActionPayloadType
}

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean):
    SetAuthUserDataActionType =>
    ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}})


type SetCaptchaUrlActionType = {
    type: typeof SET_CAPTCHA_URL
    url: string
}

export const setCaptchaUrl = (url:string): SetCaptchaUrlActionType =>
    ({type: SET_CAPTCHA_URL, url})

export const getAuthUserData = () => async (dispatch: any) => {
    let meData = await authAPI.me();
    if (meData.resultCode === ResultCodeEnum.Success) {
        let {id, login, email} = meData.data;
        dispatch(setAuthUserData(id, email, login, true));
    }

}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: any) => {
    let loginData = await authAPI.login(email, password, rememberMe,captcha)
    if (loginData.resultCode === ResultCodeEnum.Success) {
        dispatch(getAuthUserData())
    } else if (loginData.resultCode === ResultCodeEnum.CaptchaIsRequired) {
        dispatch(stopSubmit("login", {_error: 'Введите символы, изображенные на картинке'}))
        dispatch(getCaptcha())
    } else {
        let message = loginData.messages.length > 0 ? loginData.messages[0] : "Some Error";
        dispatch(stopSubmit("login", {_error: message}))
    }

}

export const getCaptcha = () => async (dispatch: any) => {
    const response = await authAPI.captcha()
    const captchaUrl = response.data.url
    dispatch(setCaptchaUrl(captchaUrl))
}


export const logout = () => async (dispatch: any) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }

}

export default authReducer;