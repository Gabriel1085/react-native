import { useReducer } from 'react';
import { useEffect } from 'react';
import { AuthState, AuthAction } from '../interfaces/login';

const authReducer = (state: AuthState, action: AuthAction): AuthState => {

    switch (action.type) {
        case "logout":
            return {
                validando: false,
                token: null,
                name: '',
                userName: ''
            }
        case "login": {

            const {name, userName} = action.payload

            return {
                validando: false,
                token: "123",
                name,
                userName
            }
        }
        default:
            return state;
    }

}

export const initialState: AuthState = {
    cargando: true,
    token: null,
    name: '',
    userName: ''
}

export const useLogin = () => {

    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: 'logout' })
        }, 1500);
    }, [])

    const login = () => {
        dispatch({
            type: 'login',
            payload: {name: 'Gabriel', userName: 'Greed'}
        })
    } 

    const logout = () => {
        dispatch({
            type: 'logout'
        })
    } 

    const [{ cargando, token, name, userName }, dispatch] = useReducer(authReducer, initialState);

    const response: AuthState = {
        cargando,
        token,
        name,
        userName
    }

    return {
        response,
        login,
        logout,
    }
}