import { LOGOUT, SIGNIN } from "./constants"

export const initialState = {
    user : null
}

export const reducer = (state, action)=>{



    switch(action.type){
        case SIGNIN:
            return {
                ...state,
                user : action.payLoad
            }

        case LOGOUT:
            return initialState

        default:
            return {
                ...state
            }

    }

}