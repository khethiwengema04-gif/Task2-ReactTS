import './App.css'
import Navbar from './Components/Navbar/Navbar'
import {Text} from './Components/Text/Text'
import { Search } from './Components/Search/Search'
// import {Inputs} from './Components/Inputs/Inputs'



function App() {

  return (
    <div id='app-container'>
      <div id='scrollable'>
        <Navbar/>
        <Search/>
        {/* <Inputs/>
       */}
       </div>  
      
    </div>
  )
}

export default App
