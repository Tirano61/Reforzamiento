import React from 'react'

export const TiposBasicos = () => {

  let nombre: string = 'Dario';
  const edad:number = 48;
  const estaActivo: boolean = true;
  const poderes: string[] = ['velocidad', 'volar', 'Respirar'];


  return (
    <>
        <h3>Tipos Básicos</h3>
        { nombre },  { edad },{ (estaActivo) ? 'Activo' : 'No Activo' }
        <br/>
        { poderes.join(', ') }
    </>
  )
}

