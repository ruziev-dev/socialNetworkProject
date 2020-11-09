import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';


let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }

        default:
            return state;
    }
}


export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => (dispatch) => {
    let promise1 = dispatch(getAuthUserData());
    //let promise2 = dispatch(setProfile());
    //dispatch(somethingelse());
    Promise.all([promise1/*, promise2*/])
        .then(() => {
            dispatch(initializedSuccess());
        });
}


export default appReducer;