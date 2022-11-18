
import { ReqResListado, Usuario } from '../interfaces/reqRes';
import { useUsuarios } from '../hooks/useUsuarios';


export const Usuarios = () => {

  const { usuarios, botonAnterior, botonSigiente  } = useUsuarios();
  
  
  const renderItem = ( usuario: Usuario ) => {
    return(
      <tr key={ usuario.id.toString() }>
        <td>
          <img src={ usuario.avatar } alt= { usuario.first_name } 
            style={{ 
              width: 50,
              borderRadius: 20,
              borderWidth: 10,
            }}
          />
        </td>
        <td> { usuario.first_name } </td>
        <td> { usuario.last_name } </td>
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
            <th>Apellido</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {
            usuarios.map( usuario => renderItem(usuario) )
          }
        </tbody>
      </table>
      <button className='btn btn-danger'
        onClick={ botonAnterior }
      >
        Anterior
      </button>
      &nbsp;
      <button className='btn btn-primary'
        onClick={ botonSigiente }
      >
        Siguiente
      </button>
    </>
  )
}
