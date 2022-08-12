import React, { useState, useEffect } from 'react'

import ShowProfileFeed from '../components/ShowProfileFeed'

const Profile = ({ currentUser, posts, users }) => {
  // const [count, setCount] = useState(0)
  const displayedUser = currentUser

  return (
    <div>
      <ShowProfileFeed
        currentUser={currentUser}
        posts={posts}
        users={users}
        displayedUser={displayedUser}
      />
    </div>
  )
}

export default Profile
