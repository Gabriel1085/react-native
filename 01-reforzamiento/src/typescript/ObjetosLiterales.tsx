interface Persona {
    nombre: string,
    edad: string,
    direccion: Direccion
}  

type Direccion = {
    manzana: number,
    casa: number
}

export const ObjetosLiterales = () => {
    
    const persona: Persona = {
        nombre: "gabriel",
        edad: "23",
        direccion: {
            manzana: 6,
            casa: 6
        }
    }
    
    return (
        <div>
            <h3>
                ObjetosLiterales
            </h3>
            {JSON.stringify(persona, null, 2)}
        </div>
    )
}
