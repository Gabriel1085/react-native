import useCounter from '../hooks/useCounter';


export const ContadorConHook = () => {

    const { valor, acumular } = useCounter();

    return (
        <>
            <h3>
                {'Contador con Hook '}
                <small>
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
