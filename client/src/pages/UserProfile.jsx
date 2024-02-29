import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../images/logo.png'
import { FaUserEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";




const  UserProfile = () => {
  const [avatar, setAvatar] = useState("");
  return (
    <section className='profile'>
      <div className="container profile__container">
        <Link to={`/myposts/kernel`} className="btn">My Posts</Link>
        <div className="profile__details">
          <div className="avatar__wrapper">
            <div className="profile__avatar">
              <img src={Avatar} alt="" />
            </div>
            {/* {} */}
            <form action="" className="avatar__form">
              <input type="file" name='avatar' id="avatar"  onChange={e => setAvatar(e.target.files[0])} accept='png , jpg , jpeg' />
              <label htmlFor="avatar">
                <FaUserEdit />
              </label>
            </form>
            <button className='profile__avatar-btn'>
              <FaCheck />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UserProfile