//import * as axios from "axios";
import axios from "axios";
import {ProfileType} from "../types/types";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "f639bb76-26f6-4a9e-bbc4-351a0c148c4d"
    }
});

 export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,).then(response => {
            return response.data;
        });
    },

     follow (id: number) {
         return instance.post(`follow/${id}`,).then(response => {
             return response.data.resultCode;
         });
     },

     unfollow (id: number) {
         return instance.delete(`follow/${id}`,).then(response => {
             return response.data.resultCode;
         });
     },

     getProfile(userId: number){
        console.log('Obsolete method. Please use ProfileAPI')
         return profileAPI.getProfile(userId);
     }

}
export const profileAPI = {

     getProfile(userId: number){
         return instance.get(`profile/${userId}`);
     },

    getStatus(userId: number){
        return instance.get(`profile/status/${userId}`);
    },

    updateStatus(status: string){
        return instance.put(`profile/status`,{ status: status});

    },

    savePhoto(photoFile: any) {
        const formData = new FormData();
        formData.append("image", photoFile);

        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },

    saveProfile(profile: ProfileType) {
        return instance.put(`profile`, profile);
     }

}

export enum ResultCodeEnum {
     Success = 0,
     Error = 1,
    CaptchaIsRequired = 10
}

type MeResponseType = {
    data: { id: number, email: string, login: string }
    resultCode: ResultCodeEnum
    messages: Array<string>
}

type LoginResponseType = {
    data: { UserId: number}
    resultCode: ResultCodeEnum
    messages: Array<string>
}

export const authAPI = {
    me(){
        return instance.get<MeResponseType>(`auth/me`).then(res => res.data);
    },

    login(email: string, password: string, rememberMe  = false, captcha: null | string = null){
        return instance.post<LoginResponseType>('auth/login', { email, password, rememberMe, captcha })
            .then(res => res.data)
    },

    logout(){
        return instance.delete('auth/login');
    },

    captcha(){
        return instance.get('security/get-captcha-url');
    }
}

