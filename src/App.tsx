import { ObjetosLiterales } from "./typescript/ObjetosLiterales";
import { TiposBasicos } from "./typescript/TiposBasicos";
import { Funciones } from './typescript/Funciones';
import { Contador } from "./typescript/Contador";


export const App = () => {
  return (
    <div className='mt-2'>
      <h1>Introduccion a React</h1>
      <hr />
      <TiposBasicos />
      <hr/>
      <ObjetosLiterales/>
      <hr/>
      <Funciones/>
      <hr/>
      <Contador/>
    </div>
  )
}

export default App;