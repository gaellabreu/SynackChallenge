import { BING_SEARCH } from './types'
import Axios from 'axios'

const headers = { "Ocp-Apim-Subscription-Key": "25205eb1d58e42e596dd9a7a9bbb7265" }

export const search = (term) => async (dispatch) => {
    Axios.get(`https://api.cognitive.microsoft.com/bing/v7.0/search?q=${term}`, { headers: headers })
        .then((response) => {
            const _data = { items: response.data.webPages.value }
            dispatch({ type: BING_SEARCH, payload: _data })
        })
        .catch((err) => console.log(err))
};