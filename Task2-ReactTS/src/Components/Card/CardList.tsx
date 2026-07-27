import React from 'react'
import type { ItemLinks } from '../types/ItemLinks'
import { Card } from './Card'

type CardListProps={
    links: ItemLinks[]
    onDelete: (id:number) => void
}

export const CardList: React.FC<CardListProps> = ({links, onDelete}) => {
  return (

    
      <>
      {links.length > 0 ? (
        links.map((listItem) => (
          <Card key={listItem.id} 
            itemLinks={listItem}
            onDelete={onDelete} />
        ))
      ) : (
        <p>No links added </p> 
      )}
    </>

     
  )
}
