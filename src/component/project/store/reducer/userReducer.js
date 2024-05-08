import * as actionType from '../actionType'

const myInitialState = {
    currentUser: null,
    allUser: [],

}

export default function userReducer(state = myInitialState, action) {

    switch (action.type) {
        case actionType.SET_ALL_USER:
            return {
                ...state,
                allUser: action.payload
            }
        case actionType.SET_CURRENT_USER: 
            return {
                ...state,
                currentUser: action.payload
            }
    }
    return state
}