import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../images/logo.png'
import { FaUserEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { UserContext } from '../context/userContext'
import { useNavigate } from 'react-router-dom'




const  UserProfile = () => {
  const [avatar, setAvatar] = useState(Avatar);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const navigate = useNavigate()
  const { currentUser } = useContext(UserContext)
  const token = currentUser?.token;

  useEffect(() => {
    if (!token) {
      navigate('/login')
    }
  }, [])

  
  
  return (
    <section className='profile'>
      <div className="container profile__container">
        <Link to={`/myposts/kernel`} className="btn">Dashboard</Link>
        <div className="profile__details">
          <div className="avatar__wrapper">
            <div className="profile__avatar">
              <img src={avatar} alt="" />
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
          <h1>@Ox_kernel</h1>
          <form className="form profile__form">
            <p className="form__error-message">An error occurred 🦊</p>
            <input type="text" placeholder='Full Name'  value={name} onChange={e => setName(e.target.value)} />
            <input type="email" placeholder='Email'  value={email} onChange={e => setEmail(e.target.value)} />
            <input type="password" placeholder='Current Password'  value={currentPassword} onChange={e => setCurrentPassword(e.target.value)} />
            <input type="password" placeholder='New Password'  value={newPassword} onChange={e => setNewPassword(e.target.value)} />
            <input type="password" placeholder='Confirm New Password'  value={confirmNewPassword} onChange={e => setConfirmNewPassword(e.target.value)} />
          </form>
          <button type='submit' className="btn primary">Update Profile</button>
        </div>
      </div>
    </section>
  )
}

export default UserProfile