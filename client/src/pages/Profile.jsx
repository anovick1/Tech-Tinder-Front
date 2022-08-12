import React, { useState, useEffect } from 'react'

import ShowUserFeed from '../components/ShowUserFeed'

const Profile = ({ currentUser, posts, users }) => {
  const [count, setCount] = useState(0)
  const displayedUser = currentUser

  return (
    <div>
      <ShowUserFeed
        currentUser={currentUser}
        posts={posts}
        users={users}
        displayedUser={displayedUser}
      />
    </div>
  )
}

export default Profile
