import { CHANGE_ENGINE } from './types'

export const changeEngine = (engine) => {
    console.log(engine)
    return { type: CHANGE_ENGINE, payload: engine }
}