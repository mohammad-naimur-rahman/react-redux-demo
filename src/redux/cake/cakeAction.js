import { ACTIONS } from "./cakeTypes"

export const buyCake = (number = 1) => {
    return {
        type: ACTIONS.BUY_CAKE,
        payload: number
    }
}