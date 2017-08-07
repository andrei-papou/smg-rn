import reducer from '../../src/reducers/employees';
import {
    getEmployeesRequest,
    getEmployeesSuccess,
    getEmployeesFailure,
    selectEmployee,
    dropEmployee
} from '../../src/actions/employees';


describe('employees reducer', () => {

    it('handles request correctly', () => {
        const action = getEmployeesRequest();
        const expectedState = {loading: true, list: null, object: null, errors: []};
        const state = reducer(undefined, action);
        expect(state).toEqual(expectedState);
    });

    it('handles success correctly', () => {
        const list = {some: 'data'};
        const action = getEmployeesSuccess(list);
        const expectedState = {loading: false, list, object: null, errors: []};
        const state = reducer(undefined, action);
        expect(state).toEqual(expectedState);
    });

    it('handles failure correctly', () => {
        const errors = ['some', 'errors'];
        const action = getEmployeesFailure(errors);
        const expectedState = {loading: false, list: null, object: null, errors};
        const state = reducer(undefined, action);
        expect(state).toEqual(expectedState);
    });

    it('handles select object correctly', () => {
        const objects = [{id: 1}, {id: 2}, {id: 3}];
        const action = selectEmployee(objects, 1);
        const expectedState = {loading: false, list: null, object: objects[0], errors: []};
        const state = reducer(undefined, action);
        expect(state).toEqual(expectedState);
    });

    it('handles drop object correctly', () => {
        const action = dropEmployee();
        const initialState = {loading: false, list: null, object: {id: 1}, errors: []};
        const expectedState = {loading: false, list: null, object: null, errors: []};
        const state = reducer(initialState, action);
        expect(state).toEqual(expectedState);
    });

});
