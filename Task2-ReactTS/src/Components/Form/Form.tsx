import React from 'react'
import style from './Form.module.css'

export const Form = () => {
  return (
    <div className="Form">
        <h2>Add Link</h2>
        <form>
         <label>Tittle:</label>
          <input
          type= "Text"
          required
          />

          <label>Link:</label>
          <textarea
            required
          ></textarea>
          
          <label>Description:</label>
          <textarea
            required
          ></textarea>

          <button>Add+</button>

        </form>


    </div>
  )
}
