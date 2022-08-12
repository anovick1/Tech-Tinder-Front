import React, { useState, useEffect } from 'react'
import ShowUserFeed from '../components/ShowUserFeed'
import LikeDislikeButtons from '../components/LikeDislikeButtons'

const Home = ({ currentUser, posts, users }) => {
  const [count, setCount] = useState(0)
  const arr = []
  let displayedUser = arr[count]

  const showFeed = () => {
    if (currentUser != null) {
      if (currentUser.orientation === 'Male') {
        for (let i = 0; i < users.length; i++) {
          if (users[i].gender === 'Male' && users[i].id !== currentUser.id) {
            arr.push(users[i])
          }
        }
        displayedUser = arr[count]
        return (
          <>
            <ShowUserFeed
            currentUser={currentUser}
            posts={posts}
            users={users}
            displayedUser={displayedUser}
            />
            <LikeDislikeButtons setCount={setCount} count={count} currentUser={currentUser} displayedUser={displayedUser} />
          </>
        )
      }
      if (currentUser.orientation === 'Female') {
        for (let i = 0; i < users.length; i++) {
          if (users[i].gender === 'Female' && users[i].id !== currentUser.id) {
            arr.push(users[i])
          }
        }
        displayedUser = arr[count]
        return (
          <>
            <ShowUserFeed
            currentUser={currentUser}
            posts={posts}
            users={users}
            displayedUser={displayedUser}
            />
            <LikeDislikeButtons setCount={setCount} count={count} currentUser={currentUser} displayedUser={displayedUser} />
          </>
        )
      }
      if (currentUser.orientation === 'Both') {
        for (let i = 0; i < users.length; i++) {
          if (users[i].id !== currentUser.id) {
            arr.push(users[i])
          }
        }
        displayedUser = arr[count]
        return (
          <>
            <ShowUserFeed
            currentUser={currentUser}
            posts={posts}
            users={users}
            displayedUser={displayedUser}
            />
            <LikeDislikeButtons setCount={setCount} count={count} currentUser={currentUser} displayedUser={displayedUser} />
          </>
        )
      }
    } else {
      return 'something'
    }
  }
  return <div>{showFeed()}</div>
}

export default Home
