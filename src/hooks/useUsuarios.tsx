import { useState, useEffect, useRef } from 'react';
import { Usuario, ReqResListado } from '../interfaces/reqRes';
import { reqResApi } from '../api/reqRes';


export const useUsuarios = () => {
  
  const [usuarios, setUsuarios] = useState <Usuario[]>([]);

  const paginaRef = useRef(1);
  useEffect(() => {
    return () => {
      cargarUsuario();
    }
  }, [])
  

  const cargarUsuario = async() => {
    const resp = await reqResApi.get<ReqResListado>('/users', {
      params:{
        page: paginaRef.current,
      }
    });
    console.log(resp)
    if( resp.data.data.length > 0 ){
      setUsuarios( resp.data.data );
 
    }else{
      paginaRef.current --;  
      alert('No hay más registros');
    }
  }

  const botonSigiente = () => {
    paginaRef.current ++;
    cargarUsuario();
  }

  const botonAnterior = () => {
    if(paginaRef.current > 1){
        paginaRef.current --;
        cargarUsuario();
    }
  }
  
  return {
    usuarios,
    botonSigiente,
    botonAnterior,
  }
    
  
}
