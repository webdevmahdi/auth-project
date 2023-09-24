import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const FriendDetails = () => {
    let friend = useLoaderData();
    console.log(friend.id);
    let navigate = useNavigate();
    let goback = () =>{
        navigate(-1);
    }
  return (
    <div>
        <h2>FriendDetails: {friend.id}</h2>
        <button onClick={goback}>Go Back</button>
    </div>
  )
}

export default FriendDetails