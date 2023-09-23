import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Friend from './Friend/Friend';

const Friends = () => {
  let users = useLoaderData();

  return (
    <div>
      <h3>My friends: {users.length}</h3>
      {
        users.map(user =>
          <Friend
            key={user.id}
            user={user}
          ></Friend>
        )
      }
    </div>
  )
}

export default Friends