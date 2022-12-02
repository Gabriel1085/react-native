import { useState } from 'react';
import { useUsers } from '../../hooks/useUsers';
import { RenderUsers } from './RenderUsers';

const Usuarios = () => {

    const { isError, isLoading, data, paginaAnterior, paginaSiguiente, page } = useUsers()

    if(isLoading) return <div>Cargando...</div>
    if(isError) return <div>Error...</div>

    return (

        <>
            <h3> Usuarios </h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        
                        // data?.data.map(usuario => renderUser(usuario))
                        data?.data.map(RenderUsers)        
                    }
                </tbody>
            </table>
            {
                page === 1 ?
                <button className="btn btn-primary m-1" onClick={paginaSiguiente}>Siguiente</button>
                :
                page === data?.total_pages ?
                <button className="btn btn-primary m-1" onClick={paginaAnterior}>Anterior</button>
                :
                <>
                    <button className="btn btn-primary m-1" onClick={paginaAnterior}>Anterior</button>
                    <button className="btn btn-primary m-1" onClick={paginaSiguiente}>Siguiente</button>
                </>
            }
        </>
    )
}

export default Usuarios
