import React from 'react'
import style from './Form.module.css'
import type { ItemLinks } from '../types/ItemLinks'
import { useState } from 'react'
import { TextInput } from '../Inputs/TextInput'
import { Button } from '../Inputs/Button'

type FormProps = {
    onsave: (link: ItemLinks) => void
    onEdit: (link: ItemLinks) => void
    editLink?: ItemLinks | null
}

export const Form: React.FC<FormProps> = ({ onsave, onEdit, editLink }) => {

    const [title, setTitle] = useState(editLink?.title ?? '')
    const [url, setUrl] = useState(editLink?.url ?? '')
    const [description, setDescription] = useState(editLink?.description ?? '')
    const [tags, setTags] = useState(editLink?.tags ?? '')

    const handleSubmit = () => {
        if (editLink) {
            onEdit({ ...editLink, title, url, description, tags })
        }
        else {
            onsave({
                id: Date.now(),
                title,
                url,
                description,
                tags
            })
        }


        setTitle('')
        setUrl('')
        setDescription('')
        setTags('')

    }
    const handle_title = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setTitle(event.target.value)
    }
    const handle_url = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setUrl(event.target.value)
    }
    const handle_description = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setDescription(event.target.value)
    }
    const handle_tag = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setTags(event.target.value)
    }

    return (
        <div className="Form">

            <h2>Add Link</h2>


            <TextInput label="Title" value={title} onChange={handle_title} />
            <TextInput label="URL" value={url} onChange={handle_url} />
            <TextInput label="Discription" value={description} onChange={handle_description} />
            <TextInput label="Tags" value={tags} onChange={handle_tag} />




            <Button value={'Add+'} onClick={handleSubmit} />



        </div>
    )
}
