import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "440c05b2-4ff6-415c-aef7-c5a83fb40cb3"
    }
});

 export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,).then(response => {
            return response.data;
        });
    },

     follow (id) {
         return instance.post(`follow/${id}`,).then(response => {
             return response.data.resultCode;
         });
     },

     unfollow (id) {
         return instance.delete(`follow/${id}`,).then(response => {
             return response.data.resultCode;
         });
     },

     getProfile(userId){
        console.log('Obsolete method. Please use ProfileAPI')
         return profileAPI.getProfile(userId);
     }

}
export const profileAPI = {

     getProfile(userId){
         return instance.get(`profile/${userId}`);
     },

    getStatus(userId){
        return instance.get(`profile/status/${userId}`);
    },

    updateStatus(status){
        return instance.put(`profile/status`,{ status: status});

    },

    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile);

        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },

    saveProfile(profile) {
        return instance.put(`profile`, profile);
     }

}

export const authAPI = {
    me(){
        return instance.get(`auth/me`);
    },

    login(email, password, rememberMe  = false, captcha){
        return instance.post('auth/login', { email, password, rememberMe, captcha });
    },

    logout(){
        return instance.delete('auth/login');
    },

    captcha(){
        return instance.get('security/get-captcha-url');
    }
}