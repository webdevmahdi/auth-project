import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Friends = () => {
    let user = useLoaderData();

  return (
    <div>Friends{user.length}</div>
  )
}

export default Friends