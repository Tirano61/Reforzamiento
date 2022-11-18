import { useState } from 'react';
import { Formularios } from '../typescript/Formularios';


export const useForm = <T extends Object >(formulario: T) => {

  const [state, setSate] = useState( formulario )

  const onchangeCampo = ( value: string, campo: keyof T ) => {
    setSate ({
      ...state,
      [campo]: value
      
    });
  }

  return {
    onchangeCampo,
    formulario: state,
  }

    
}
