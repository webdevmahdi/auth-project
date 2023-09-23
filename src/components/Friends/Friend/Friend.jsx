import React from 'react'
import './Friend.css'
import { Link } from 'react-router-dom';

const Friend = ({ user }) => {
    let { name, email, username, id} = user;
    console.log(user)
  return (
    <div className='friend'> 
        <h3><strong>{name}</strong></h3>
        <h4>{username}</h4>
        <p>{email}</p>
        <Link to={`/friend/${id}`}>Show me details</Link>
    </div>
  )
}

export default Friend