import { type } from '@testing-library/user-event/dist/type'
import * as actionType from '../actionType'


export function setAllUser(allUser){
    return{
        type:actionType.SET_ALL_USER,
        payload: allUser
    }

}
export function setCurrentUser(userPassword){
    return{
    type: actionType.SET_CURRENT_USER,
    payload: userPassword
    }
}