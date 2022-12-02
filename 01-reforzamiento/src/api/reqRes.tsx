import axios from "axios"
import { ReqResListado } from '../interfaces/reqRes';

type QueryKey = [
    string,
    number
]

export const fetchUsers = async ({...props}) => {
    const queryKey : QueryKey = props.queryKey
    const response = await axios.get(`https://reqres.in/api/users`, {
        params: {
            page: queryKey[1]
        }
    });
    const data: ReqResListado = response.data;
    return data;
}