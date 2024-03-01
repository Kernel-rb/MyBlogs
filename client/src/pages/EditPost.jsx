import React from 'react'
import { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

function EditPost() {
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('Uncategorized')
  const [description, setDescription] = useState('')
  const [thumbnail, setThumbnail] = useState('')

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3,4,5,6, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ]
  }
  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image' 
  ];
  const POST_CATEGORIES = ["Rust" , "Python" , "Web Dev" , "Site Reliability" , "System Design" , "Concepts" , "Uncategorized" ];

  return (
    <section className='create-post'>
      <div className="container">
        <h2>Edit Post 💡 </h2>
        <p className='form__error-message'>
          An error occurred 🦊
        </p>
        <form className="form create-post__form">
          <input type="text" placeholder='Title' value={title} onChange={e => setTitle(e.target.value)} autoFocus />
          <select name="category" value={category} onChange={e => setCategory(e.target.value)}>
            {
              POST_CATEGORIES.map( cat => <option key={cat} value={cat}>{cat}</option> )
            }
          </select>
            <ReactQuill className="q1-editor" modules={modules} formats={formats} value={description} onChange={setDescription} />
            <input type="file" onChange={e => setThumbnail(e.target.files[0])} accept='png,jpeg , jpg' />
            <button type="submit" className='btn primary'>Update ♻️</button>
        </form>
      </div>
    </section>
  )
}

export default EditPost