import { GOOGLE_SEARCH, GOOGLE_MORE } from './types'
import Axios from 'axios'

const key = 'AIzaSyDCcwYUlaVT3BYhNq-3RBaHuoWPU93RxuI'

export const search = (term) => async (dispatch) => {
    Axios.get(`https://www.googleapis.com/customsearch/v1?key=${key}&cx=017576662512468239146:omuauf_lfve&q=${term}`)
        .then((response) => {
            const _data = { items: response.data.items, queries: response.data.queries }
            dispatch({ type: GOOGLE_SEARCH, payload: _data })
        })
        .catch((err) => console.log(err))
};

export const more = (term, index) => async (dispatch) => {
    Axios.get(`https://www.googleapis.com/customsearch/v1?key=${key}&cx=017576662512468239146:omuauf_lfve&q=${term}&start=${index}`)
        .then((response) => {
            const _data = { items: response.data.items, queries: response.data.queries }
            dispatch({ type: GOOGLE_MORE, payload: _data })
        })
        .catch((err) => console.log(err))
};