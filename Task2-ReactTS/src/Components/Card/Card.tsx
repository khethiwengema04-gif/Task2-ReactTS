import React from 'react'
import type { ItemLinks } from '../types/ItemLinks'
import { Text } from '../Text/Text';
import style from './Card.module.css'

// interface CardProps{
//     data: ItemLinks;
// }

export const Card: React.FC<ItemLinks> = ({title,url,description,tags}) => {
  return (
    <div>
        <Text varient={'h1'}>{title}</Text>
        <Text varient={'h2'}>{url}</Text>
        <Text varient={'p'}>{description}</Text>
        <Text varient={'h3'}>{tags}</Text>

        <button className={style.button}>
            Delete
        </button>

        <button className={style.button}>
            Edit
        </button>
    </div>
  )
}

