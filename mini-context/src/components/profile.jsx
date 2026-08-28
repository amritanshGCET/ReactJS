import React, { useContext } from 'react'
import Usercontext from '../context/context'

function Profile() {
  const { user } = useContext(Usercontext)

  if (!user) {
   return <div>Please LogIn</div>
  }

  return <div>Welcome {user.username}</div>
}

export default Profile
