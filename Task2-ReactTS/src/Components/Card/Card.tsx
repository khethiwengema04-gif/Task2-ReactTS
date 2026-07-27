import React from 'react'
import type { ItemLinks } from '../types/ItemLinks'
import { Text } from '../Text/Text';
import style from './Card.module.css'



interface ItemLinkProps{
    itemLinks: ItemLinks;
    onDelete: (id:number)=> void
}

export const Card: React.FC<ItemLinkProps> = ({onDelete, itemLinks}) => {
  return (
    <div>
        <Text varient={'h1'}>{itemLinks.title}</Text>
        <Text varient={'h2'}>{itemLinks.url}</Text>
        <Text varient={'p'}>{itemLinks.description}</Text>
        <Text varient={'h3'}>{itemLinks.tags}</Text>

        <button className={style.button} onClick={() => onDelete(itemLinks.id)}>
            Delete
        </button>

        <button className={style.button} >
            Edit
        </button>
    </div>
  )
}

