import './App.css'
import Navbar from './Components/Navbar/Navbar'

import { Search } from './Components/Search/Search'

import { Form } from './Components/Form/Form'



function App() {

  return (
    <div id='app-container'>
      <div id='scrollable'>
        <Navbar/>
        <Search/>
        <Form/>
        
       </div>  
      
    </div>
  )
}

export default App
