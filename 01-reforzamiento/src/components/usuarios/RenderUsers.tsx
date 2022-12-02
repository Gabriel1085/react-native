import { Usuario } from '../../interfaces/reqRes';

export const RenderUsers = ( { id, first_name, last_name, email, avatar }: Usuario ) => {
    return (
        <tr key={ id.toString() }>
            <td>
                <img 
                    src= {avatar} 
                    alt = {first_name} 
                    style = {{
                        width: 40,
                        borderRadius: '50%'
                    }}
                />
            </td>
            <td>{ first_name } { last_name }</td>
            <td>{ email }</td>
        </tr>
    )
}
