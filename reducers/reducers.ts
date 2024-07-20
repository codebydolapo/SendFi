import { combineReducers } from "redux"


export const account = (state = "", action: { type: string; account: string }) => {
    switch (action.type) {
        case "SAVE_ACCOUNT":
            console.log(action.account)
            return action.account
        default:
            return state
    }
}

export const allReducers = combineReducers({
    account
})