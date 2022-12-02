import { useState } from 'react';


export const useForm = <T extends Object> (formulario: T) => {
    
    const [state, setState] = useState(formulario);

    const onChange = ( value: string, campo: keyof T ) => {
        setState({
            ...state,
            [campo]: value      //COMPUTA EL VALOR DE CAMPO PARA QUE EXISTA EN EL OBJETO
        });
    }

    return {
        ...state,
        formulario: state,
        onChange,
    }
}