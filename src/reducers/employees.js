import {
    EMPLOYEE_LIST_REQUEST,
    EMPLOYEE_LIST_SUCCESS,
    EMPLOYEE_LIST_FAILURE,
    EMPLOYEE_OBJECT_SELECT,
    EMPLOYEE_OBJECT_DROP
} from '../constants/action-types';

const initialState = {loading: false, list: null, object: null, errors: []};

export default function(state = initialState, action) {
    switch (action.type) {
        case EMPLOYEE_LIST_REQUEST:
            return {...state, loading: true};
        case EMPLOYEE_LIST_SUCCESS:
            return {...state, loading: false, list: action.data};
        case EMPLOYEE_LIST_FAILURE:
            return {...state, loading: false, errors: action.errors};
        case EMPLOYEE_OBJECT_SELECT:
            return {...state, object: action.data};
        case EMPLOYEE_OBJECT_DROP:
            return {...state, object: null};
        default:
            return state;
    }
}
