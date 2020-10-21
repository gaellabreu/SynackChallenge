import { GOOGLE_SEARCH, GOOGLE_MORE } from './types';

const INITIAL_STATE = {
    items: [],
    queries: {}
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GOOGLE_SEARCH:
            return { ...state, ...action.payload };
        case GOOGLE_MORE: {
            const _more = [...state.items, ...action.payload.items]
            return { ...state, items: _more, queries: action.payload.queries }
        }
        default: return state;
    }
};