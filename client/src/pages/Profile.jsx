import React, { useState, useEffect } from 'react'

import ShowProfileFeed from '../components/ShowProfileFeed'
import ProfileEditForm from '../components/EditProfile'

const Profile = ({ currentUser, posts, users, setCurrentUser, setPosts }) => {
  const [edit, setEdit] = useState(false)
  const displayedUser = currentUser

  return currentUser && displayedUser ? (
    edit ? (
      <ProfileEditForm
        currentUser={currentUser}
        posts={posts}
        users={users}
        displayedUser={displayedUser}
        edit={edit}
        setEdit={setEdit}
        setCurrentUser={setCurrentUser}
      />
    ) : (
      <ShowProfileFeed
        currentUser={currentUser}
        posts={posts}
        users={users}
        displayedUser={displayedUser}
        edit={edit}
        setEdit={setEdit}
        setCurrentUser={setCurrentUser}
        setPosts={setPosts}
      />
    )
  ) : (
    ''
  )
}

export default Profile
