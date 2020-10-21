import { CHANGE_ENGINE } from './types';

const INITIAL_STATE = 'google'

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_ENGINE:
            return action.payload;
        default:
            return state
    }
};