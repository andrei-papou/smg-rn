import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT} from '../constants/action-types';

const initialState = {loading: false, errors: [], data: null};

export default function(state = initialState, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {...state, loading: true};
        case LOGIN_SUCCESS:
            return {...state, loading: false, data: action.data};
        case LOGIN_FAILURE:
            return {...state, loading: false, errors: action.errors};
        case LOGOUT:
            return {...state, data: null};
        default:
            return state;
    }
}
