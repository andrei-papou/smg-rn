import {AsyncStorage} from 'react-native';
import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT} from '../constants/action-types';
import {API_BASE, USER_DATA_KEY} from '../config';
import {MAIN, LOGIN} from '../constants/route-keys';
import {anonHeaders} from '../utils/http';
import {push} from './navigation';


export const loginRequest = () => ({type: LOGIN_REQUEST});

export const loginSuccess = data => ({type: LOGIN_SUCCESS, data});

export const loginFailure = errors => ({type: LOGIN_FAILURE, errors});

export const checkAuth = () => {
    return dispatch => {
        return AsyncStorage.getItem(USER_DATA_KEY).then(data => {
            if (data) {
                dispatch(loginSuccess(JSON.parse(data)));
                dispatch(push(MAIN));
            }
        });
    };
};

export const login = payload => {
    return dispatch => {
        dispatch(loginRequest());
        return fetch(`${API_BASE}auth/sign-in/`, {
            method: 'POST',
            headers: anonHeaders(),
            body: JSON.stringify(payload)
        })
            .then(response => response.ok ? response.json() : Promise.reject(response.json()))
            .then(json => AsyncStorage.setItem(USER_DATA_KEY, JSON.stringify(json)).then(() => json))
            .then(json => dispatch(loginSuccess(json)))
            .then(() => dispatch(push(MAIN)))
            .catch(errors => {
                dispatch(loginFailure(errors));
                return Promise.reject(errors);
            });
    };
};

export const logout = () => {
    return dispatch => {
        return AsyncStorage.removeItem(USER_DATA_KEY)
            .then(() => {
                dispatch({type: LOGOUT});
                dispatch(push(LOGIN));
            });
    };
};
