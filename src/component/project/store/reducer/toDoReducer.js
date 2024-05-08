import * as actionType from '../actionType'

const myInitialState = {
    arrTasks: []
}

export default function toDoReducer(state = myInitialState, action) {
    switch (action.type) {
        case actionType.SET_ALL_TASK:
            return {
                ...state,
                arrTasks: action.payload
            }
        case actionType.DELETE_TASK:
            let copy = state.arrTasks.filter(x => x.id != action.payload)
            return {
                ...state,
                arrTasks: copy
            }
        case actionType.SET_ONE_TASK:
            let copy2 = state.arrTasks.map(x => {
                if (x.id === action.payload) {
                    x.completed = true;
                }
                return x;
            });
            return {
                ...state,
                arrTasks: copy2
            }
    }

    return state

}