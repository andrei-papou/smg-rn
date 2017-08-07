import reducer from '../../src/reducers/ooo';
import {
    TIME_SHIFT_LIST,
    TIME_SHIFT_CREATE,
    BUSINESS_LEAVE_LIST,
    BUSINESS_LEAVE_CREATE,
    VACATION_LIST,
    VACATION_CREATE,
    UNPAID_LIST,
    UNPAID_CREATE
} from '../../src/constants/action-types';

describe('ooo reducer', () => {

    const initialState = {
        timeShift: [],
        unpaid: [],
        businessLeave: [],
        vacation: []
    };

    it('should handle time shift list correctly', () => {
        const data = ['tsh1', 'tsh2', 'tsh3'];
        const expectedState = {...initialState, timeShift: data};
        const state = reducer(initialState, {type: TIME_SHIFT_LIST, data});
        expect(state).toEqual(expectedState);
    });

    it('should handle time shift create correctly', () => {
        const list = ['tsh1', 'tsh2', 'tsh3'];
        const newItem = 'tsh4';
        const expectedState = {...initialState, timeShift: list.concat(newItem)};
        const state = reducer({...initialState, timeShift: list}, {type: TIME_SHIFT_CREATE, data: newItem});
        expect(state).toEqual(expectedState);
    });

    it('should handle business leave list correctly', () => {
        const data = ['bl1', 'bl2', 'bl3'];
        const expectedState = {...initialState, businessLeave: data};
        const state = reducer(initialState, {type: BUSINESS_LEAVE_LIST, data});
        expect(state).toEqual(expectedState);
    });

    it('should handle business leave create correctly', () => {
        const list = ['bl1', 'bl2', 'bl3'];
        const newItem = 'bl4';
        const expectedState = {...initialState, businessLeave: list.concat(newItem)};
        const state = reducer({...initialState, businessLeave: list}, {type: BUSINESS_LEAVE_CREATE, data: newItem});
        expect(state).toEqual(expectedState);
    });

    it('should handle vacation list correctly', () => {
        const data = ['vc1', 'vc2', 'vc3'];
        const expectedState = {...initialState, vacation: data};
        const state = reducer(initialState, {type: VACATION_LIST, data});
        expect(state).toEqual(expectedState);
    });

    it('should handle vacation create correctly', () => {
        const list = ['vc1', 'vc2', 'vc3'];
        const newItem = 'vc4';
        const expectedState = {...initialState, vacation: list.concat(newItem)};
        const state = reducer({...initialState, vacation: list}, {type: VACATION_CREATE, data: newItem});
        expect(state).toEqual(expectedState);
    });

    it('should handle unpaid list correctly', () => {
        const data = ['up1', 'up2', 'up3'];
        const expectedState = {...initialState, unpaid: data};
        const state = reducer(initialState, {type: UNPAID_LIST, data});
        expect(state).toEqual(expectedState);
    });

    it('should handle unpaid create correctly', () => {
        const list = ['up1', 'up2', 'up3'];
        const newItem = 'up4';
        const expectedState = {...initialState, unpaid: list.concat(newItem)};
        const state = reducer({...initialState, unpaid: list}, {type: UNPAID_CREATE, data: newItem});
        expect(state).toEqual(expectedState);
    });

});
