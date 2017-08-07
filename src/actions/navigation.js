import {NAVIGATION_PUSH} from '../constants/action-types';


export const push = key => ({
    type: NAVIGATION_PUSH,
    payload: key
});
