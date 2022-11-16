import { useEffect, useState } from 'react';
import { reqResApi } from '../api/reqRes';
import { ReqResListado, Usuario } from '../interfaces/reqRes';


export const Usuarios = () => {

  const [usuariosState, setUsuarios] = useState<Usuario[]>([])

  useEffect(() => {
    
      reqResApi.get<ReqResListado>('/users')
          .then(resp => {
              console.log(resp.data.data);
              setUsuarios(resp.data.data);
          })
          .catch( console.log );
    
  }, [])
  
  const renderItem = ( usuario: Usuario ) => {
    return(
      <tr key={ usuario.id.toString() }>
        <td>
          <img src={ usuario.avatar } alt= { usuario.first_name } 
            style={{ 
              width: 50,
              borderRadius: 100
            }}
          />
        </td>
        <td> { usuario.first_name } </td>
        <td> { usuario.email } </td>
      </tr>
    )
  }

  return (
    <>
      <h3>Usuarios</h3>
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
            usuariosState.map( renderItem )
          }
        </tbody>
      </table>
    </>
  )
}
