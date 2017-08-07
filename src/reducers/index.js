import auth from './auth';
import navigation from './navigation';
import employees from './employees';
import ooo from './ooo';
import { reducer as formReducer } from 'redux-form';

const reducers = {
    auth,
    navigation,
    employees,
    ooo,
    form: formReducer,
};

export default reducers;
