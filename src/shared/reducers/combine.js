import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';

import userReducer from './user-reducer';
import newComponent from './newComponent';

const reducers = combineReducers({
    user: userReducer,
    newComp: newComponent,
    form: formReducer
});

export default reducers;
