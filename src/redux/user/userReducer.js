import { USER_ACTION } from "./userTypes";

const initialState = {
    loading: false,
    users: [],
    error: ''
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_ACTION.FETCH_REQUEST:
            return {
                ...state,
                loading: true
            }
        case USER_ACTION.FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload,
                error: ''
            }
        case USER_ACTION.FETCH_FAILURE:
            return {
                ...state,
                loading: false,
                users: [],
                error: action.payload
            }
        case USER_ACTION.REMOVE_USER:
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.payload)
            }
        default:
            return state;
    }
}

export default userReducer;