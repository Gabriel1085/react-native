import { useLogin } from '../hooks/useLogin';
import { AuthState } from '../interfaces/login';

const Login = () => {

    const {response, login, logout} = useLogin()
    
    const { cargando, token, userName, name } = response;

    if(cargando) {
        return (
            <>
            <h3>
                Login
            </h3>
            <div className="alert alert-info">
                Cargando...
            </div>
            </>
        )
    }

    return (
        <>
            <h3>
                Login
            </h3>

            {
                (token) ?             
                <div className="alert alert-success">
                    {`Autenticado como ${name} con nombre de usuario: ${userName}`}
                </div>
                : 
                <div className="alert alert-danger">
                    No autenticado
                </div>
            }

            {
                (token) ?
                <button className="btn btn-danger" onClick={(logout)}>
                    Logout
                </button>
                :
                <button className="btn btn-primary" onClick={login}>
                    Login 
                </button>
            }
        </>
    )
}

export default Login
