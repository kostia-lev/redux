import {
    LOGIN_REQUEST,
    LOGIN_SUCCES,
    LOGIN_FAIL
    LOGOUT_REQUEST,
    LOGOUT_SUCCES,
    LOGOUT_FAIL
} from '../constants/User'

export function handleLogin() {

    return function(dispatch) {

        dispatch({
            type: LOGIN_REQUEST
        })

        VK.Auth.login((r) => { // eslint-disable-line no-undef
            if (r.session) {
                let username = r.session.user.first_name;

                dispatch({
                    type: LOGIN_SUCCES,
                    payload: username
                })

            } else {
                dispatch({
                    type: LOGIN_FAIL,
                    error: true,
                    payload: new Error('Ошибка авторизации')
                })
            }
        },4); // запрос прав на доступ к photo
    }

}

export function handleLogout() {

    return function(dispatch) {

        dispatch({
            type: LOGOUT_REQUEST
        })

        VK.Auth.logout((r) => { // eslint-disable-line no-undef
            if (r.session) {
                let username = r.session.user.first_name;

                dispatch({
                    type: LOGIN_SUCCES,
                    payload: username
                })

            } else {
                dispatch({
                    type: LOGIN_FAIL,
                    error: true,
                    payload: new Error('Ошибка авторизации')
                })
            }
        },4); // запрос прав на доступ к photo
    }

}
