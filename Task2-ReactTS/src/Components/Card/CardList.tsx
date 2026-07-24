import React from 'react'
import type { ItemLinks } from '../types/ItemLinks'
import { Card } from './Card'

type CardListProps={
    links: ItemLinks[]
    
}

export const CardList: React.FC<CardListProps> = ({links}) => {
  return (

     <>
     {
      links.length ===0 && links.map((link)=>
        <Card key={link.id} {...link}/>
      )
     }

     </>
  )
}
