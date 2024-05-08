import * as actionType from '../actionType'

export function deleteTask(idTask) {
    return {
        type: actionType.DELETE_TASK,
        payload: idTask
    }
}

export function setAllTask(arrTasks) {
    return {
        type: actionType.SET_ALL_TASK,
        payload: arrTasks
    }
}

export function setOneTask(idTask) {
return{
    type: actionType.SET_ONE_TASK,
    payload: idTask
}
}