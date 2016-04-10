import {
    LOGIN_SUCCES,
    LOGIN_FAIL,
    LOGOUT_SUCCES
} from '../constants/User'

const initialState = {
    name: '',
    error: '',
    handleLogin: function(){},
    logged: false
}

export default function user(state = initialState, action) {

    switch(action.type) {
        case LOGIN_SUCCES:
            return { ...state, name: action.payload, error: '' }

        case LOGIN_FAIL:
            return { ...state, error: action.payload.message }

        case LOGOUT_SUCCES:
            return { ...state, name: '', error: '', handleLogin: function(){}, logged: false }

        default:
            return state
    }

}