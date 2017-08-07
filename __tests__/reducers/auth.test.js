import reducer from '../../src/reducers/auth';
import {
    loginRequest,
    loginSuccess,
    loginFailure
} from '../../src/actions/auth';
import {LOGOUT} from '../../src/constants/action-types';

describe('auth reducer', () => {

    const initialState = {loading: false, errors: [], data: null};

    it('handles login request correctly', () => {
        const expectedState = {...initialState, loading: true};
        const state = reducer(initialState, loginRequest());
        expect(state).toEqual(expectedState);
    });

    it('handles login success correctly', () => {
        const data = {some: 'data'};
        const expectedState = {...initialState, data};
        const state = reducer(initialState, loginSuccess(data));
        expect(state).toEqual(expectedState);
    });

    it('handles login failure correctly', () => {
        const errors = ['some', 'errors'];
        const expectedState = {...initialState, errors};
        const state = reducer(initialState, loginFailure(errors));
        expect(state).toEqual(expectedState);
    });

    it('handles logout correctly', () => {
        const data = {some: 'data'};
        const expectedState = initialState;
        const state = reducer({...initialState, data}, {type: LOGOUT});
        expect(state).toEqual(expectedState);
    });

});
