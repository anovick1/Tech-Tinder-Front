import React, { useState, useEffect } from 'react'

import ShowProfileFeed from '../components/ShowProfileFeed'
import ProfileEditForm from '../components/EditProfile'
import { GetUsers, GetLikedMe, GetUserLikes } from '../services/UserServices'

const Profile = ({
  currentUser,
  posts,
  users,
  setCurrentUser,
  setPosts,
  profile,
  setProfile,
  connections,
  likes,
  setLikes,
  likedMe,
  setLikedMe,
  setConnections
}) => {
  const [edit, setEdit] = useState(false)
  const displayedUser = currentUser
  useEffect(() => {
    if (currentUser != null) {
      GetLikedMe(currentUser.id).then((res) => setLikedMe(res[0].liked_me))
      GetUserLikes(currentUser.id).then((res) => setLikes(res[0].likes))
    }
  }, [currentUser])

  useEffect(() => {
    if (currentUser != null) {
      let c = []
      for (let i = 0; i < likes.length; i++) {
        for (let j = 0; j < likedMe.length; j++) {
          if (likes[i].id === likedMe[j].id) {
            c.push(likes[i].id)
          }
        }
      }
      setConnections(c)
    }
  }, [likes])

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
        likes={likes}
        setLikes={setLikes}
        likedMe={likedMe}
        setLikedMe={setLikedMe}
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
        profile={profile}
        setProfile={setProfile}
        connections={connections}
      />
    )
  ) : (
    ''
  )
}

export default Profile
