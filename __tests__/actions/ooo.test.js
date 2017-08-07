import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import 'isomorphic-fetch';
import {API_BASE} from '../../src/config';
import {
    getTimeShifts,
    getBusinessLeaves,
    getVacations,
    getUnpaids,
    createTimeShift,
    createBusinessLeave,
    createVacation,
    createUnpaid
} from '../../src/actions/ooo';
import {
    TIME_SHIFT_LIST,
    BUSINESS_LEAVE_LIST,
    VACATION_LIST,
    UNPAID_LIST,
    TIME_SHIFT_CREATE,
    BUSINESS_LEAVE_CREATE,
    VACATION_CREATE,
    UNPAID_CREATE
} from '../../src/constants/action-types';

describe('list ooo actions', () => {

    const authState = {auth: {data: {token: 'dfdkf'}}};

    const mockStore = configureMockStore([thunk]);
    afterEach(() => nock.cleanAll());

    it('should list time shifts correctly', () => {
        const responseData = ['tsh1', 'tsh2'];
        nock(API_BASE).get('/ooo/time_shifts/').reply(200, responseData);
        const expectedActions = [{type: TIME_SHIFT_LIST, data: responseData}];
        const store = mockStore({ooo: {timeShift: []}, ...authState});
        store.dispatch(getTimeShifts()).then(() => expect(store.getActions()).toEqual(expectedActions));
    });

    it('should list business leaves correctly', () => {
        const responseData = ['bl1', 'bl2'];
        nock(API_BASE).get('/ooo/business_leaves/').reply(200, responseData);
        const expectedActions = [{type: BUSINESS_LEAVE_LIST, data: responseData}];
        const store = mockStore({ooo: {businessLeave: []}, ...authState});
        store.dispatch(getBusinessLeaves()).then(() => expect(store.getActions()).toEqual(expectedActions));
    });

    it('should list vacations correctly', () => {
        const responseData = ['vc1', 'vc2'];
        nock(API_BASE).get('/ooo/vacations/').reply(200, responseData);
        const expectedActions = [{type: VACATION_LIST, data: responseData}];
        const store = mockStore({ooo: {vacations: []}, ...authState});
        store.dispatch(getVacations()).then(() => expect(store.getActions()).toEqual(expectedActions));
    });

    it('should list unpaids correctly', () => {
        const responseData = ['up1', 'up2'];
        nock(API_BASE).get('/ooo/unpaids/').reply(200, responseData);
        const expectedActions = [{type: UNPAID_LIST, data: responseData}];
        const store = mockStore({ooo: {vacations: []}, ...authState});
        store.dispatch(getUnpaids()).then(() => expect(store.getActions()).toEqual(expectedActions));
    });

});

describe('create ooo actions', () => {

    const authState = {auth: {data: {token: 'dfdkf'}}};

    const mockStore = configureMockStore([thunk]);
    afterEach(() => nock.cleanAll());

    it('should create time shifts correctly', () => {
        const newData = 'tsh3';
        nock(API_BASE).post('/ooo/time_shifts/').reply(200, newData);
        const expectedActions = [{type: TIME_SHIFT_CREATE, data: newData}];
        const store = mockStore({ooo: {timeShifts: []}, ...authState});
        store.dispatch(createTimeShift(newData)).then(() => expect(store.getActions()).toEqual(expectedActions));
    });

    it('should create business leave correctly', () => {
        const newData = 'bl3';
        nock(API_BASE).post('/ooo/business_leave/').reply(200, newData);
        const expectedActions = [{type: BUSINESS_LEAVE_CREATE, data: newData}];
        const store = mockStore({ooo: {businessLeaves: []}, ...authState});
        store.dispatch(createBusinessLeave(newData)).then(() => expect(store.getActions()).toEqual(expectedActions));
    });

    it('should create vacation correctly', () => {
        const newData = 'vc3';
        nock(API_BASE).post('/ooo/vacations/').reply(200, newData);
        const expectedActions = [{type: VACATION_CREATE, data: newData}];
        const store = mockStore({ooo: {vacations: []}, ...authState});
        store.dispatch(createVacation(newData)).then(() => expect(store.getActions()).toEqual(expectedActions));
    });

    it('should create unpaids correctly', () => {
        const newData = 'up3';
        nock(API_BASE).post('/ooo/unpaids/').reply(200, newData);
        const expectedActions = [{type: UNPAID_CREATE, data: newData}];
        const store = mockStore({ooo: {unpaids: []}, ...authState});
        store.dispatch(createUnpaid(newData)).then(() => expect(store.getActions()).toEqual(expectedActions));
    });

});
