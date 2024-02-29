import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../images/me.png'

const  PostAuthor = () => {
  return (
      <Link to={`/posts/users/1`} className='post__author'>
          <div className="post__author-avatar">
              <img src={Avatar} alt="" />
          </div>
          <div className="post__author-details">
              <h5>By : Saif Matab </h5>
              <small> Just now </small>
          </div>
   </Link>
  )
}

export default PostAuthor