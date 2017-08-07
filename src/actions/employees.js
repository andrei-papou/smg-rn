import {
    EMPLOYEE_LIST_REQUEST,
    EMPLOYEE_LIST_SUCCESS,
    EMPLOYEE_LIST_FAILURE,
    EMPLOYEE_OBJECT_SELECT,
    EMPLOYEE_OBJECT_DROP
} from '../constants/action-types';
import {API_BASE} from '../config';
import {authedHeaders} from '../utils/http';


export const getEmployeesRequest = () => ({type: EMPLOYEE_LIST_REQUEST});

export const getEmployeesSuccess = data => ({type: EMPLOYEE_LIST_SUCCESS, data});

export const getEmployeesFailure = errors => ({type: EMPLOYEE_LIST_FAILURE, errors});

export const getEmployees = () => {
    return (dispatch, getState) => {
        dispatch(getEmployeesRequest());
        return fetch(`${API_BASE}auth/accounts/`, {headers: authedHeaders(getState)})
            .then(response => response.ok ? response.json() : Promise.reject(response.json()))
            .then(json => dispatch(getEmployeesSuccess(json)))
            .catch(errors => dispatch(getEmployeesFailure(errors)));
    };
};

export const selectEmployee = (employees, id) => {
    const employee = employees.find(empl => empl.id === id);
    return {type: EMPLOYEE_OBJECT_SELECT, data: employee};
};

export const dropEmployee = () => {
    return {type: EMPLOYEE_OBJECT_DROP};
};
