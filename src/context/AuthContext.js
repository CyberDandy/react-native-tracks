import {AsyncStorage} from "react-native";
import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import {navigate} from "../navigationRef";


const PATH = Object.freeze({
    SIGNUP: '/signup',
    SIGNIN: '/signin',
});

const ACTIONS = Object.freeze({
    ERROR: 'error',
    CLEAR_ERROR: 'clear error',
    SIGNUP: 'signup',
    SIGNIN: 'signin',
    SIGNOUT: 'signout',
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
        case ACTIONS.SIGNIN:
            return {
                ...state,
                errorMessage: null,
                token: payload.token
            };
        case ACTIONS.SIGNOUT:
            return {
                ...state,
                errorMessage: null,
                token: null
            };
        case ACTIONS.ERROR:
            return {
                ...state,
                errorMessage: payload.errorMessage
            };
        case ACTIONS.CLEAR_ERROR:
            return {
                ...state,
                errorMessage: null
            };
        default:
            return state;
    }
};

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem(STORAGE_KEY.TOKEN);
    if (token) {
        dispatch({
            type: ACTIONS.SIGNIN,
            payload: {token}
        });
        navigate('TrackList');
    } else {
        navigate('Signup');
    }
};

const clearErrorMessage = dispatch => () => {
    dispatch({
        type: ACTIONS.CLEAR_ERROR
    });
};

const signUp = dispatch => async ({email, password}) => {
    try {
        const response = await trackerApi.post(PATH.SIGNUP, {email, password});
        const token = response.data.token;
        await AsyncStorage.setItem(STORAGE_KEY.TOKEN, token);

        dispatch({
            type: ACTIONS.SIGNUP,
            payload: {token}
        });
        navigate('TrackList');
    } catch (e) {
        dispatch({
            type: ACTIONS.ERROR,
            payload: {
                errorMessage: 'Something went wrong with sign up'
            }
        });
    }
};

const signIn = dispatch => async ({email, password}) => {
    try {
        const response = await trackerApi.post(PATH.SIGNIN, {email, password});
        const token = response.data.token;
        await AsyncStorage.setItem(STORAGE_KEY.TOKEN, token);

        dispatch({
            type: ACTIONS.SIGNIN,
            payload: {token}
        });
        navigate('TrackList');
    } catch (e) {
        dispatch({
            type: ACTIONS.ERROR,
            payload: {
                errorMessage: 'Something went wrong with sign in'
            }
        });
    }
};

const signOut = dispatch => async () => {
    await AsyncStorage.removeItem(STORAGE_KEY.TOKEN);
    dispatch({
            type: ACTIONS.SIGNOUT
        }
    );
    navigate('loginFlow');
};

export const {Provider, Context} = createDataContext(
    authReducer,
    {
        tryLocalSignin,
        signUp,
        signIn,
        signOut,
        clearErrorMessage
    },
    {
        token: null,
        errorMessage: ''
    }
);
