import './App.css'
import Navbar from './Components/Navbar/Navbar'
// import {Text} from './Components/Text/Text'
import { Search } from './Components/Search/Search'
import { Form } from './Components/Form/Form'
import { CardList } from './Components/Card/CardList'
import { useState } from 'react'
import type { ItemLinks } from './Components/types/ItemLinks'



function App() {
  const [links, setLinks]=useState <ItemLinks[]>(() => {
    try {
      const savedLinks= localStorage.getItem("links")
      return savedLinks ? JSON.parse(savedLinks) : []
    } catch (error) {
      return []
    }
  })
   

   const addlink=(newLink: ItemLinks) => { 
    setLinks((prevLinks)=> {
      const currentArray= Array.isArray(prevLinks) ? prevLinks :[]
      const updatedArray= [...currentArray, newLink]
      localStorage.setItem("links", JSON.stringify(updatedArray))
      return updatedArray
    })
   }

   
   const deleteFunction = (id: number)=>{
    setLinks ((links.filter(links=>links.id!==id )))
    const updatedArray= (links.filter(links=>links.id!==id ))
    localStorage.setItem("links", JSON.stringify(updatedArray))
    return updatedArray
   }

   // function handleDelete(id) {
   //   const NewList = LinkList.filter((t) => !== id)
   //   setLinkList([...NewList]);
   // }



   console.log(links);
   return (

    <div id='app-container'>
      <div id='scrollable'>
        <Navbar/>
        <Search/>
        <Form onsave={addlink}/>
        <CardList links={links} onDelete={deleteFunction} />
        
       
      </div>  
      
    </div>
  )
}

export default App


