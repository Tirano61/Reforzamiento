

interface Persona {
    nombre: string,
    edad: number,
    direccion: Direccion
}

interface Direccion {
    pais: string,
    calle: string,
    num: number
}

export const ObjetosLiterales = () => {

    const persona: Persona = {
        nombre: 'Dario',
        edad: 48,
        direccion:{
            pais: 'Argentina',
            calle: 'Pueyrredón',
            num: 2179
        }
    }

    return (
        <>
            <h2>Objejtos Literales</h2>
            <code>
                <pre>
                    { JSON.stringify(persona, null, 2) }
                </pre>
            </code>
        </>
    )
}
