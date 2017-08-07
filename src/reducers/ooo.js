import {
    TIME_SHIFT_LIST,
    VACATION_LIST,
    BUSINESS_LEAVE_LIST,
    UNPAID_LIST,
    TIME_SHIFT_CREATE,
    VACATION_CREATE,
    BUSINESS_LEAVE_CREATE,
    UNPAID_CREATE,
} from '../constants/action-types';

const initialState = {
    timeShift: [],
    unpaid: [],
    businessLeave: [],
    vacation: []
};

export default function oooReducer(state = initialState, action) {
    switch (action.type) {
        case TIME_SHIFT_LIST:
            return {...state, timeShift: action.data};
        case TIME_SHIFT_CREATE:
            return {...state, timeShift: state.timeShift.concat(action.data)};
        case VACATION_LIST:
            return {...state, vacation: action.data};
        case VACATION_CREATE:
            return {...state, vacation: state.vacation.concat(action.data)};
        case BUSINESS_LEAVE_LIST:
            return {...state, businessLeave: action.data};
        case BUSINESS_LEAVE_CREATE:
            return {...state, businessLeave: state.businessLeave.concat(action.data)};
        case UNPAID_LIST:
            return {...state, unpaid: action.data};
        case UNPAID_CREATE:
            return {...state, unpaid: state.unpaid.concat(action.data)};
        default:
            return state;
    }
}
