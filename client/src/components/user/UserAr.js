import React from 'react'
import { useNavigate } from 'react-router-dom';
import './user.css'

const UserAr = ({user}) => {
    const navigate= useNavigate()
    const openUser = (e) => {
        navigate(`/users/${user._id}`);
      };
  return (
    <div className="user-container" onClick={openUser} style={{flexDirection: "row-reverse"}}>
        <p>{user?.name}</p>
        <p>{user?.email}</p>
        <p>{user?.system?.arabic}</p>
        <p>{user?.type?.arabic}</p>
        <p>{user?.points}</p>
    </div>
  )
}

export default UserAr