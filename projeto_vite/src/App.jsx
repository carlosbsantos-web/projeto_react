
import './App.css'
import Index from './components/Index'
import State from './components/State'
import ListRender from './components/ListRender'
import PrevState from './PrevState'
import Eventos from './components/Eventos'
import Frase from './components/Frase'
import ChildrenProp from './components/ChildrenProp'

const App = () => {
 

  return (
    
      <div>

    <h2>Olá React</h2>
    

        
        <Index />
        <State/>
        <ListRender/>
        <PrevState/>
        <Eventos numero = '1'/>
        <Eventos numero = '2'/>
        <Frase/>

        <ChildrenProp myValue='Teste'>

        <p>Iniciando ChildrenProps</p>

        </ChildrenProp>
        
      </div>
      
    
  )
}

export default App
