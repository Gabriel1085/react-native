import { useForm } from '../hooks/useForm';

export const Formularios = () => {

    const initialFormulario = {
        email: 'test@example.com',
        password: '12345'
    }

    const { onChange, formulario, email, password } = useForm(initialFormulario);

    return (
        <div>
            <h3>
                Formularios
            </h3>

            <input
                type='text'
                className = 'form-control'
                placeholder="Email"
                value={email}
                onChange={({target}) => onChange( target.value ,'email')}
            />

            <input
                type='text'
                className = 'form-control mt-2 mb-2'
                placeholder="Password"
                value={password}
                onChange={({target}) => onChange( target.value ,'password')}
            />

            <code>
                <pre>
                    {
                        JSON.stringify(formulario, null, 2)
                    }
                </pre>
            </code>

        </div>
    ) 
}
