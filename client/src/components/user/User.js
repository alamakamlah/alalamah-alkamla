import React from 'react'
import { useNavigate } from 'react-router-dom';
import './user.css'

const User = ({user}) => {
    const navigate= useNavigate()
    const openUser = (e) => {
        navigate(`/users/${user._id}`);
      };
  return (
    <div className="user-container" onClick={openUser}>
        <p>{user?.name}</p>
        <p>{user?.email}</p>
        <p>{user?.system?.english}</p>
        <p>{user?.type?.english}</p>
        <p>{user?.points}</p>
    </div>
  )
}

export default User