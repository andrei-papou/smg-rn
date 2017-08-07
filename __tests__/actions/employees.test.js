import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import 'isomorphic-fetch';
import {API_BASE} from '../../src/config';
import {
    getEmployeesRequest,
    getEmployeesSuccess,
    getEmployeesFailure,
    getEmployees,
    selectEmployee,
    dropEmployee
} from '../../src/actions/employees';
import {
    EMPLOYEE_LIST_REQUEST,
    EMPLOYEE_LIST_SUCCESS,
    EMPLOYEE_LIST_FAILURE,
    EMPLOYEE_OBJECT_SELECT,
    EMPLOYEE_OBJECT_DROP
} from '../../src/constants/action-types';


describe('employee list request', () => {

    it('should return correct action', () => {
        const correctAction = {type: EMPLOYEE_LIST_REQUEST};
        const action = getEmployeesRequest();
        expect(action).toEqual(correctAction);
    });

});

describe('employee list success', () => {

    it('should return correct action', () => {
        const data = ['empl1', 'empl2'];
        const correctAction = {type: EMPLOYEE_LIST_SUCCESS, data};
        const action = getEmployeesSuccess(data);
        expect(action).toEqual(correctAction);
    });

})

describe('employee list failure', () => {

    it('should return correct action', () => {
        const errors = ['empl1', 'empl2'];
        const correctAction = {type: EMPLOYEE_LIST_FAILURE, errors};
        const action = getEmployeesFailure(errors);
        expect(action).toEqual(correctAction);
    });

});

describe('employee list', () => {

    const mockStore = configureMockStore([thunk]);
    afterEach(() => nock.cleanAll());

    it('should dispatch correct actions on success', () => {
        const responseData = ['empl1', 'empl2'];
        nock(API_BASE).get('/auth/accounts/').reply(200, responseData);
        const expectedActions = [
            {type: EMPLOYEE_LIST_REQUEST},
            {type: EMPLOYEE_LIST_SUCCESS, data: responseData}
        ];
        const store = mockStore({auth: {data: {token: 'sometoken'}}});
        store.dispatch(getEmployees()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('should dispatch correct actions on failure', () => {
        const responseData = ['error1', 'error2'];
        nock(API_BASE).get('/auth/accounts/').reply(400, responseData);
        const expectedActions = [
            {type: EMPLOYEE_LIST_REQUEST},
            {type: EMPLOYEE_LIST_FAILURE, errors: responseData}
        ];
        const store = mockStore({auth: {data: {token: 'sometoken'}}});
        store.dispatch(getEmployees()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

});

describe('select employee', () => {

    it('should return correct action', () => {
        const employees = [{id: 1}, {id: 2}, {id: 3}];
        const correctAction = {type: EMPLOYEE_OBJECT_SELECT, data: {id: 1}};
        const action = selectEmployee(employees, 1);
        expect(action).toEqual(correctAction);
    });

});

describe('drop employee', () => {

    it('should return correct action', () => {
        const correctAction = {type: EMPLOYEE_OBJECT_DROP};
        const action = dropEmployee();
        expect(action).toEqual(correctAction);
    });

});
