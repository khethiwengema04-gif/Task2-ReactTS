import './App.css'
import Navbar from './Components/Navbar/Navbar'
import {Text} from './Components/Text/Text'
import { Search } from './Components/Search/Search'
import { Form } from './Components/Form/Form'
import { CardList } from './Components/Card/CardList'
import { useState } from 'react'
import type { ItemLinks } from './Components/types/ItemLinks'



function App() {
  const [links, setLinks]=useState <ItemLinks[]>([])
   const addlink=(newLink: ItemLinks) => { 
    setLinks([...links,newLink])
   }
 console.log(links);
  return (

    <div id='app-container'>
      <div id='scrollable'>
        <Navbar/>
        <Search/>
        <Form onsave={addlink}/>
        <CardList links={links} />
        
       
      </div>  
      
    </div>
  )
}

export default App
