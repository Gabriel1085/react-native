import { fetchUsers } from '../api/reqRes';
import { useQuery } from 'react-query';
import { useState } from 'react';

export const useUsers = () => {

    const [page, setPage] = useState<number>(1)

    const paginaSiguiente = () => {
        if(data?.total_pages)
        page + 1 > data.total_pages ? alert('No existen mas páginas') : setPage(page + 1);
    }

    const paginaAnterior = () => {
        page - 1 < 1 ? alert('Ya se encuentra en la primer página') : setPage(page -1);
    }

    const { isError, isLoading, data, error } = useQuery(
        ['users', page],
        fetchUsers,        
        {staleTime: 60000}
    )

    return {
        isError, 
        isLoading, 
        data, 
        error,
        page,
        paginaSiguiente,
        paginaAnterior
    }
}