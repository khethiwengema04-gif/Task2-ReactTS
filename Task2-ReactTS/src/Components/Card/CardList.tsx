import React from 'react'
import type { ItemLinks } from '../types/ItemLinks'
import { Card } from './Card'

type CardListProps = {
  links: ItemLinks[]
  onDelete: (id: number) => void
  onEdit: (id: number) => void
}

export const CardList: React.FC<CardListProps> = ({ links, onDelete, onEdit }) => {
  return (


    <>
      {links.length > 0 ? (
        links.map((listItem) => (
          <Card key={listItem.id}
            itemLinks={listItem}
            onDelete={onDelete}
            onEdit={onEdit} />

        ))
      ) : (
        <p>No links added </p>
      )}
    </>


  )
}
