import Login from './containers/Login';
import Main from './containers/Main';
import About from './containers/About';
import {LOGIN, MAIN, ABOUT} from './constants/route-keys';

export const routes = {
    [LOGIN]: {
        key: LOGIN,
        title: 'Sign In',
        component: Login
    },
    [MAIN]: {
        key: MAIN,
        title: 'Employees',
        component: Main
    },
    [ABOUT]: {
        key: ABOUT,
        title: 'About',
        component: About
    }
};
export const initialState = routes[LOGIN];