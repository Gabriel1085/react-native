export interface AuthState {
    cargando: boolean,
    token: string | null,
    name: string,
    userName: string
}

export type LoginPayload = {
    userName: string,
    name: string
}

export type AuthAction = 
    | { type: 'logout' }
    | {type: 'login', payload: LoginPayload };