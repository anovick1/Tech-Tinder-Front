import React, { useState, useEffect } from 'react'
import ShowUserFeed from '../components/ShowUserFeed'

const Home = ({ currentUser, posts, users }) => {
  const [count, setCount] = useState(0)

  const arr = []

  const showFeed = () => {
    if (currentUser != null) {
      if (currentUser.orientation === 'Male') {
        for (let i = 0; i < users.length; i++) {
          if (users[i].gender === 'Male' && users[i].id !== currentUser.id) {
            arr.push(users[i])
          }
        }
        return (
          <ShowUserFeed
            currentUser={currentUser}
            posts={posts}
            users={users}
            count={count}
            setCount={setCount}
          />
        )
      }
      if (currentUser.orientation === 'Female') {
        for (let i = 0; i < users.length; i++) {
          if (users[i].gender === 'Female' && users[i].id !== currentUser.id) {
            arr.push(users[i])
          }
        }
        return (
          <ShowUserFeed
            currentUser={currentUser}
            posts={posts}
            users={users}
            count={count}
            setCount={setCount}
          />
        )
      }
      if (currentUser.orientation === 'Both') {
        for (let i = 0; i < users.length; i++) {
          if (users[i].id !== currentUser.id) {
            arr.push(users[i])
          }
        }
        return (
          <ShowUserFeed
            currentUser={currentUser}
            posts={posts}
            users={users}
            count={count}
            setCount={setCount}
          />
        )
      }
    } else {
      return ''
    }
  }
  return <div>{showFeed()}</div>
}

export default Home
