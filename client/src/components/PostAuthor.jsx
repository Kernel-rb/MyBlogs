import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

const PostAuthor = ({ authorID, createdAt }) => {
    const [author, setAuthor] = useState({})
    
    useEffect(() =>
    {
        const getAuthor = async () =>
        {
            try
            {
                const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/users/${authorID}`);
                setAuthor(res?.data);

            } catch (error) {
                console.log(error)
            }
        }
        getAuthor();
    }
    , [])

  return (
      <Link to={`/posts/users/1`} className='post__author'>
          <div className="post__author-avatar">
              <img src={`${process.env.REACT_APP_ASSESTS_URL}/uploads/${author?.avatar}`} alt="" />
          </div>
          <div className="post__author-details">
              <h5>By : Saif Matab </h5>
              <small> Just now </small>
          </div>
   </Link>
  )
}

export default PostAuthor