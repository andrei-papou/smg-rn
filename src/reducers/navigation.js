import {NAVIGATION_PUSH} from '../constants/action-types';
import {routes, initialState} from '../navigation-config';

export default (state = initialState, action) => {
    switch (action.type) {
        case NAVIGATION_PUSH:
            return routes[action.payload];
        default:
            return state;
    }
}
