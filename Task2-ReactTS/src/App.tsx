import './App.css'
import Navbar from './Components/Navbar/Navbar'
// import {Text} from './Components/Text/Text'
import { Search } from './Components/Search/Search'
import { Form } from './Components/Form/Form'
import { CardList } from './Components/Card/CardList'
import { useState } from 'react'
import type { ItemLinks } from './Components/types/ItemLinks'



function App() {
  const [links, setLinks] = useState<ItemLinks[]>(() => {
    try {
      const savedLinks = localStorage.getItem("links")
      return savedLinks ? JSON.parse(savedLinks) : []
    } catch (error) {
      return []
    }
  })


  const addlink = (newLink: ItemLinks) => {
    setLinks((prevLinks) => {
      const currentArray = Array.isArray(prevLinks) ? prevLinks : []
      const updatedArray = [...currentArray, newLink]
      localStorage.setItem("links", JSON.stringify(updatedArray))
      return updatedArray
    })
  }


  const deleteFunction = (id: number) => {
    setLinks((links.filter(links => links.id !== id)))
    const updatedArray = (links.filter(links => links.id !== id))
    localStorage.setItem("links", JSON.stringify(updatedArray))
    return updatedArray
  }


  const [editLink, setEditLink] = useState<ItemLinks | null>(null)

  const findEditLink = (id: number) => {
    const link = links.find(link => link.id === id)
    if (link) setEditLink(link)
  }

  const updateLink = (updatedLink: ItemLinks) => {
    setLinks(links.map(link => link.id === updatedLink.id ? updatedLink : link))
    const updatedArray = (links.map(link => link.id === updatedLink.id ? updatedLink : link))
    setEditLink(null)
    localStorage.setItem("links", JSON.stringify(updatedArray))
    return updatedArray
  }


  return (

    <div id='app-container'>
      <div id='scrollable'>
        <Navbar />
        <Search />
        <Form onsave={addlink} key={editLink?.id ?? 'add'} onEdit={updateLink} editLink={editLink} />
        <CardList links={links} onDelete={deleteFunction} onEdit={findEditLink} />


      </div>

    </div>
  )
}

export default App


