import { BING_SEARCH, BING_MORE, BING_CLEAR } from './types';

const INITIAL_STATE = {
    items: [],
    queries: {}
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case BING_SEARCH:
            return { ...state, ...action.payload };
        default: return state;
    }
};