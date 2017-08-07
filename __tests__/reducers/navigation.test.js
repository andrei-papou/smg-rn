import reducer from '../../src/reducers/navigation';
import {push, pop} from '../../src/actions/navigation';
import {MAIN, LOGIN} from '../../src/constants/route-keys';
import Main from '../../src/containers/Main';


describe('navigation reducer', () => {

    it('handles push correctly', () => {
        const expectedState = {key: MAIN,  title: 'Employees', component: Main};
        const state = reducer(undefined, push(MAIN));
        expect(state).toEqual(expectedState);
    });

});
