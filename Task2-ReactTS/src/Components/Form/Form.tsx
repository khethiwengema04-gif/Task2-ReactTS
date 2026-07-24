import React from 'react'
import style from './Form.module.css'
import type { ItemLinks } from '../types/ItemLinks'
import { useState } from 'react'
import { TextInput } from '../Inputs/TextInput'
import { Button } from '../Inputs/Button'

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
    const handle_title =( 
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setTitle(event.target.value)
    }
     const handle_url =( 
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setUrl(event.target.value)
    }
     const handle_description =( 
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setDescription(event.target.value)
    }
     const handle_tag =( 
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setTags(event.target.value)
    }

  return (
    <div className="Form">
      
        <h2>Add Link</h2>
       
       
            <TextInput  label="Title" value={title} onChange={handle_title}/>
             <TextInput  label="URL" value={url} onChange={handle_url}/>
              <TextInput  label="Discription" value={description} onChange={handle_description}/>
               <TextInput  label="Tags" value={tags} onChange={ handle_tag}/>
                

       

              <Button value={'Add+'} onClick={handleSubmit} />



    </div>
  )
}
