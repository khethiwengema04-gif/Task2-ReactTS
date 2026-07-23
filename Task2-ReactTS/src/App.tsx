import './App.css'
import Navbar from './Components/Navbar/Navbar'
import {Text} from './Components/Text/Text'
import { Search } from './Components/Search/Search'
// import {Inputs} from './Components/Inputs/Inputs'
import { Form } from './Components/Form/Form'



function App() {

  return (
    <div id='app-container'>
      <div id='scrollable'>
        <Navbar/>
        <Search/>
        <Form/>
        {/* <Inputs/>
       */}
       </div>  
      
    </div>
  )
}

export default App
