import {push, pop} from '../../src/actions/navigation';
import {NAVIGATION_PUSH} from '../../src/constants/action-types';
import {MAIN} from '../../src/constants/route-keys';


describe('navigation push', () => {

    it('should return correct action', () => {
        const correctAction = {type: NAVIGATION_PUSH, payload: MAIN};
        const action = push(MAIN);
        expect(action).toEqual(correctAction);
    });

});
