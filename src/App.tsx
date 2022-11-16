//import { ObjetosLiterales } from "./typescript/ObjetosLiterales";
//import { TiposBasicos } from "./typescript/TiposBasicos";
//import { Funciones } from './typescript/Funciones';
//import { ContadorConhook } from "./typescript/Contador";
//import { Login } from "./typescript/Login";
//import { Contador } from "./typescript/Contador";

import { Usuarios } from "./typescript/Usuarios";


export const App = () => {
  return (
    <div className='mt-2'>
      <h1>Introduccion a React</h1>
      <hr />
      {/* <TiposBasicos /> */}
      {/* <hr/> */}
      {/* <ObjetosLiterales/> */}
      {/* <hr/> */}
      {/* <Funciones/> */}
      {/* <hr/> */}
      {/* <ContadorConhook/> */}
      {/* <hr /> */}
      {/* <Login /> */}
      <Usuarios />
    </div>
  )
}

export default App;