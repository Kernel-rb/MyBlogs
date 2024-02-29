import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import Avatar from '../images/me.png'

const authorsData = [
  {
    id: 1,
    avatar : Avatar,
    name: 'Saif Matab',
    posts: 2
  },
]

const Authors = () => {
  const [authors, setAuthors] = useState(authorsData)
  return (
    <section className="authors"> 
      {authors.length > 0 ? <div className="container authors__container">
        {
          authors.map(({id , name , avatar , posts}) => {
            return <Link key={id} to={`/posts/users/${id}`} className="author">
              <div className="author__avatar">
                <img src={avatar} alt={` ${name} img's`}/>
              </div>
              <div className="author__info">
                <h4>{name}</h4>
                <p>{posts} Posts</p>
              </div>
              </Link>
        })
        }
      </div> : <h2> No authors found 🔎 </h2>
      }
    </section>
  )
}

export default Authors