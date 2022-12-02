import { useState } from 'react';

const useCounter = (inicial: number = 10) => {
    const [valor, setValor] = useState<number>(inicial);

    const acumular = (n: number) => {
        setValor(n + valor); 
    }

    return {
        valor,
        acumular
    }
}

export default useCounter
