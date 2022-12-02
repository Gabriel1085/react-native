export const TiposBasicos = () => {
    
    const nombre: string = 'Gabriel';
    const edad: number = 23;
    const estaActivo: boolean = true;

    const poderes: Array<string> = ['velocidad', 'volar', 'invisibilidad']

    return (
        <div>
            
            <h3>
                Tipos Básicos
            </h3>
            {nombre}, {edad}, {estaActivo ? 'esta activo' : 'no esta activo'}
            <br/>
            {poderes.join(', ')}
        </div>
    )
}
