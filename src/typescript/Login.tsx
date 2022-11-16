import { type } from "@testing-library/user-event/dist/type"
import { useEffect, useReducer } from "react"


interface AuthState {
  validando: boolean,
  token: string | null,
  username: string,
  nombre: string
}

type LoginPayload = {
  username: string,
  nombre: string,
}

type AuthAction = 
  | { type: 'logout' }
  | { type: 'login', payload: LoginPayload };

const initialState = {
  validando: true,
  token: null,
  username: '',
  nombre: ''
}

const authReducer = ( state: AuthState, action: AuthAction ): AuthState => {
  switch (action.type) {
    case 'logout':
      return {
        validando: false,
        token    : null,
        username : '',
        nombre   : ''
      }
    case 'login':
      return {
        validando: false,
        token: 'abc123',
        nombre: action.payload.nombre,
        username: action.payload.username
      }
    default:
      return state;
  }  
}

export const Login = () => {

  const [{ validando, token, nombre }, dispatch] = useReducer(authReducer, initialState)
  
  useEffect(() => {
    setTimeout(() => {
      dispatch({type: 'logout'})
    }, 1500);
  }, []);

  const loginFunct  = () => {
    dispatch({ 
      type: 'login', 
      payload: {
        nombre: 'Dario',
        username: 'Tirano61'
      }
    })
  }

  const logoutFunct = () => {
    dispatch({ type: 'logout' })
  }
  
  if( validando ) {
    return (
      <>
        <h3>Login</h3>
        <div className="alert alert-info">
          Validando ... 
        </div>
      </>
    )
  }
    
  return (
    <>
        <h3>Login</h3>

        {
          ( token )
          ? <div className="alert alert-success">Autenticado como : { nombre } </div>
          : <div className="alert alert-danger">No autenticado ... </div>
        }

        {
          ( token )
          ? <button 
            className="btn btn-danger"
            onClick={ logoutFunct }
          >
            Logout
          </button>
          :<button 
            className="btn btn-primary"
            onClick={ loginFunct }
          >
            Login
          </button>
        }
        
        
        

    </>
  )
}
