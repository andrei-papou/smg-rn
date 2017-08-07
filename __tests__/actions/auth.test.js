import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import 'isomorphic-fetch';
import {AsyncStorage} from 'react-native';
import {API_BASE, USER_DATA_KEY} from '../../src/config';
import {loginRequest, loginSuccess, loginFailure, login, checkAuth} from '../../src/actions/auth';
import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, NAVIGATION_PUSH} from '../../src/constants/action-types';
import {MAIN} from '../../src/constants/route-keys';

const mockStorage = require('mock-async-storage');
mockStorage.mock();


describe('loginRequest', () => {

    it('should return correct action', () => {
        const correntAction = {type: LOGIN_REQUEST};
        const action = loginRequest();
        expect(action).toEqual(correntAction);
    });

});

describe('loginSuccess', () => {

    it('should return correct action', () => {
        const data = {username: 'some_u', password: 'some_p'};
        const correntAction = {type: LOGIN_SUCCESS, data};
        const action = loginSuccess(data);
        expect(action).toEqual(correntAction);
    });

});

describe('loginFailure', () => {

    it('should return correct action', () => {
        const errors = [
            {'username': ['Username already taken']}
        ];
        const correctAction = {type: LOGIN_FAILURE, errors};
        const action = loginFailure(errors);
        expect(action).toEqual(correctAction);
    });

});

describe('login', () => {

    const mockStore = configureMockStore([thunk]);

    afterEach(() => {
        nock.cleanAll();
    });

    it('handles success correctly', () => {
        const responseData = {
            token: 'sad232df08@#43dsf27#4823',
        };
        nock(API_BASE).post('/auth/sign-in/').reply(200, responseData);

        const expectedActions = [
            {type: LOGIN_REQUEST},
            {type: LOGIN_SUCCESS, data: responseData},
            {type: NAVIGATION_PUSH, payload: MAIN}
        ];
        const store = mockStore({});
        return store.dispatch(login({username: 'username', password: 'password'})).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

});

describe('checkAuth', () => {

    const mockStore = configureMockStore([thunk]);

    it('should dispatch correct actions when user data is in storage', () => {
        const expectedActions = [
            {type: LOGIN_SUCCESS, data: JSON.stringify({name: 'Andrew'})},
            {type: NAVIGATION_PUSH, key: MAIN}
        ];
        const store = mockStore({});

        AsyncStorage.clear()
            .then(() => AsyncStorage.setItem(USER_DATA_KEY, JSON.stringify({name: 'Andrew'})))
            .then(() => store.dispatch(checkAuth()))
            .then(() => expect(store.getActions()).toEqual(expectedActions));
    });

    it('should dispatch no actions when user data is not in storage', () => {
        const expectedActions = [];
        const store = mockStore({});

        AsyncStorage.clear()
            .then(() => store.dispatch(checkAuth()))
            .then(() => expect(store.getActions()).toEqual(expectedActions));
    });

});
