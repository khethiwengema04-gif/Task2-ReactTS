import React from 'react'
import style from './Form.module.css'
import type { ItemLinks } from '../types/ItemLinks'
import { useState } from 'react'

type FormProps= { 
    onsave:(link:ItemLinks)=> void
}

export const Form: React.FC<FormProps> = ({onsave}) => {

    const [title,setTitle]= useState('')
    const [url,setUrl]= useState('')
    const [description,setDescription]= useState('')
    const [tags,setTags]= useState('')

    const handleSubmit=() => {
        onsave({id:Date.now(),
            title,
            url,
            description,
            tags
        })
         
setTitle('')
setUrl('')
setDescription('')
setTags('')

    }

  return (
    <div className="Form">
        <h2>Add Link</h2>
        <form>
         <label>Tittle:</label>
          <input
          type= "Text"
          required
          onChange={(e) => setTitle(e.target.value)}
          value={title}/>

          <label>Link:</label>
          <textarea
            required
          ></textarea>
          
          <label>Description:</label>
          <textarea
            required
          ></textarea>

          <label>Tags:</label>
          <textarea
            required
          ></textarea>

          <button onClick={handleSubmit}>Add+</button>

        </form>


    </div>
  )
}
