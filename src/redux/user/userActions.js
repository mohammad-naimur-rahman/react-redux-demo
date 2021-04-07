import axios from "axios"
import { USER_ACTION } from "./userTypes"

export const fetchRequest = () => {
    return {
        type: USER_ACTION.FETCH_REQUEST
    }
}

export const fetchSuccess = users => {
    return {
        type: USER_ACTION.FETCH_SUCCESS,
        payload: users
    }
}

export const fetchError = error => {
    return {
        type: USER_ACTION.FETCH_FAILURE,
        payload: error
    }
}

export const removerUser = id => {
    return {
        type: USER_ACTION.REMOVE_USER,
        payload: id
    }
}

export const fetchUsers = () => {

    return (dispatch) => {
        dispatch(fetchRequest)
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                const users = res.data;
                dispatch(fetchSuccess(users))
            })
            .catch(err => {
                const errorMsg = err.message;
                dispatch(fetchError(errorMsg))
            })
    }
}