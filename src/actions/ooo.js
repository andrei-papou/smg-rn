import {
    TIME_SHIFT_LIST,
    VACATION_LIST,
    BUSINESS_LEAVE_LIST,
    UNPAID_LIST,
    TIME_SHIFT_CREATE,
    VACATION_CREATE,
    BUSINESS_LEAVE_CREATE,
    UNPAID_CREATE
} from '../constants/action-types';
import {API_BASE} from '../config';
import {authedHeaders} from '../utils/http';


export const getTimeShifts = () => {
    return (dispatch, getState) => {
        return fetch(`${API_BASE}ooo/time-shifts/`, {headers: authedHeaders(getState)})
            .then(response => response.ok ? response.json() : Promise.reject(response.json()))
            .then(json => dispatch({type: TIME_SHIFT_LIST, data: json}));
    };
};

export const createTimeShift = data => {
    return (dispatch, getState) => {
        return fetch(`${API_BASE}ooo/time-shifts/`, {
            method: 'POST',
            headers: authedHeaders(getState),
            body: JSON.stringify(data)
        })
            .then(response => response.ok ? response.json() : Promise.reject(response.json()))
            .then(json => {
                const u = getState().auth.data;
                dispatch({
                    type: TIME_SHIFT_CREATE,
                    data: {
                        ...json,
                        person: `${u.last_name} ${u.first_name} ${u.patronymic}`
                    }
                });
                return json;
            });
    }
};

export const getVacations = () => {
    return (dispatch, getState) => {
        return fetch(`${API_BASE}ooo/vacations/`, {headers: authedHeaders(getState)})
            .then(response => response.ok ? response.json() : Promise.reject(response.json()))
            .then(json => dispatch({type: VACATION_LIST, data: json}));
    };
};

export const createVacation = data => {
    return (dispatch, getState) => {
        return fetch(`${API_BASE}ooo/vacations/`, {
            method: 'POST',
            headers: authedHeaders(getState),
            body: JSON.stringify(data)
        })
            .then(response => response.ok ? response.json() : Promise.reject(response.json()))
            .then(json => {
                const u = getState().auth.data;
                dispatch({
                    type: VACATION_CREATE,
                    data: {
                        ...json,
                        person: `${u.last_name} ${u.first_name} ${u.patronymic}`
                    }
                });
                return json;
            });
    }
};

export const getBusinessLeaves = () => {
    return (dispatch, getState) => {
        return fetch(`${API_BASE}ooo/business-leaves/`, {headers: authedHeaders(getState)})
            .then(response => response.ok ? response.json() : Promise.reject(response.json()))
            .then(json => dispatch({type: BUSINESS_LEAVE_LIST, data: json}));
    };
};

export const createBusinessLeave = data => {
    return (dispatch, getState) => {
        return fetch(`${API_BASE}ooo/business-leaves/`, {
            method: 'POST',
            headers: authedHeaders(getState),
            body: JSON.stringify(data)
        })
            .then(response => response.ok ? response.json() : Promise.reject(response.json()))
            .then(json => {
                const u = getState().auth.data;
                dispatch({
                    type: BUSINESS_LEAVE_CREATE,
                    data: {
                        ...json,
                        person: `${u.last_name} ${u.first_name} ${u.patronymic}`
                    }
                });
                return json;
            });
    }
};

export const getUnpaids = () => {
    return (dispatch, getState) => {
        return fetch(`${API_BASE}ooo/unpaids/`, {headers: authedHeaders(getState)})
            .then(response => response.ok ? response.json() : Promise.reject(response.json()))
            .then(json => dispatch({type: UNPAID_LIST, data: json}));
    };
};

export const createUnpaid = data => {
    return (dispatch, getState) => {
        return fetch(`${API_BASE}ooo/unpaids/`, {
            method: 'POST',
            headers: authedHeaders(getState),
            body: JSON.stringify(data)
        })
            .then(response => response.ok ? response.json() : Promise.reject(response.json()))
            .then(json => {
                const u = getState().auth.data;
                dispatch({
                    type: UNPAID_CREATE,
                    data: {
                        ...json,
                        person: `${u.last_name} ${u.first_name} ${u.patronymic}`
                    }
                });
                return json;
            });
    }
};
