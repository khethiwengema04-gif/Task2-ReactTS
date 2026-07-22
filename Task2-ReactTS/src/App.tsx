import './App.css'
import Navbar from './Components/Navbar/Navbar'
import {Text} from './Components/Text/Text'
import { Search } from './Components/Search/Search'



function App() {

  return (
    <div id='app-container'>
      <div id='scrollable'>
        <Navbar/>
        <Search/>
      
      
       </div>  
      
    </div>
  )
}

export default App
