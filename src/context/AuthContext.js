import {AsyncStorage} from "react-native";
import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import {navigate} from "../navigationRef";


const PATH = Object.freeze({
    SIGNUP: '/signup'
});

const ACTIONS = Object.freeze({
    ERROR_SIGNUP: 'error_signup',
    SIGNUP: 'signup'
});

const STORAGE_KEY = Object.freeze({
    TOKEN: 'token'
});

const authReducer = (state, action) => {
    const payload = action.payload;
    switch (action.type) {
        case ACTIONS.SIGNUP:
            return {
                ...state,
                errorMessage: null,
                token: payload.token
            };
        case ACTIONS.ERROR_SIGNUP:
            return {
                ...state,
                errorMessage: payload.errorMessage
            };
        default:
            return state;
    }
};

const signUp = dispatch => async ({email, password}) => {
    try {
        const response = await trackerApi.post(PATH.SIGNUP, {email, password});
        const token = response.data.token;
        await AsyncStorage.setItem(STORAGE_KEY.TOKEN, token);

        dispatch({type: ACTIONS.SIGNUP, payload: {token}});
        navigate('TrackList');
    } catch (e) {
        dispatch({type: ACTIONS.ERROR_SIGNUP, payload: {errorMessage: 'Something went wrong with sign up'}})
    }
};

const signIn = dispatch => {
    return ({email, password}) => {

    }
};

const signOut = dispatch => {
    return () => {

    }
};

export const {Provider, Context} = createDataContext(
    authReducer,
    {
        signUp,
        signIn,
        signOut
    },
    {
        token: null,
        errorMessage: ''
    }
);
