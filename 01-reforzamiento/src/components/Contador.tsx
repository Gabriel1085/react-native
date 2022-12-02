import { useState } from "react"

export const Contador = () => {

    const [valor, setValor] = useState<number>(10);

    const acumular = (n: number) => {
        setValor(n + valor);
    }

    return (
        <>
            <h3>
                {'Contador  '}
                <small className="">
                    {valor}
                </small>
            </h3>
            <button className="btn btn-primary m-2" onClick={() => acumular(1)}>
                +1
            </button>

            <button className="btn btn-danger" onClick={() => acumular(-1)}>
                -1
            </button>
        </>
    )
}
