import React, { useState, useEffect } from 'react'
import ShowUserFeed from '../components/ShowUserFeed'
import LikeDislikeButtons from '../components/LikeDislikeButtons'
import ComeAgain from '../components/ComeAgain'
import { GetUsers, GetLikedMe, GetUserLikes } from '../services/UserServices'

const Home = ({
  currentUser,
  posts,
  users,
  setCurrentUser,
  connections,
  setConnections,
  likes,
  setLikes,
  likedMe,
  setLikedMe
}) => {
  const [count, setCount] = useState(0)
  const arr = []
  let displayedUser = arr[count]

  useEffect(() => {
    if (currentUser != null) {
      console.log('test')
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
      console.log(c)
      setConnections(c)
    }
  }, [likes])

  const showFeed = () => {
    if (currentUser != null) {
      if (currentUser.orientation === 'Male') {
        for (let i = 0; i < users.length; i++) {
          if (users[i].gender === 'Male' && users[i].id !== currentUser.id) {
            arr.push(users[i])
          }
        }
        displayedUser = arr[count]
        return count < arr.length ? (
          <>
            <ShowUserFeed
              currentUser={currentUser}
              posts={posts}
              users={users}
              displayedUser={displayedUser}
            />
            <LikeDislikeButtons
              setCount={setCount}
              count={count}
              currentUser={currentUser}
              displayedUser={displayedUser}
              connections={connections}
              setConnections={setConnections}
              likes={likes}
              likedMe={likedMe}
            />
          </>
        ) : (
          <ComeAgain currentUser={currentUser} />
        )
      }
      if (currentUser.orientation === 'Female') {
        for (let i = 0; i < users.length; i++) {
          if (users[i].gender === 'Female' && users[i].id !== currentUser.id) {
            arr.push(users[i])
          }
        }
        displayedUser = arr[count]
        return count < arr.length ? (
          <>
            <ShowUserFeed
              currentUser={currentUser}
              posts={posts}
              users={users}
              displayedUser={displayedUser}
            />
            <LikeDislikeButtons
              setCount={setCount}
              count={count}
              currentUser={currentUser}
              displayedUser={displayedUser}
              connections={connections}
              setConnections={setConnections}
              likes={likes}
              likedMe={likedMe}
            />
          </>
        ) : (
          <ComeAgain currentUser={currentUser} />
        )
      }
      if (currentUser.orientation === 'Both') {
        for (let i = 0; i < users.length; i++) {
          if (users[i].id !== currentUser.id) {
            arr.push(users[i])
          }
        }
        displayedUser = arr[count]
        return count < arr.length ? (
          <>
            <ShowUserFeed
              currentUser={currentUser}
              posts={posts}
              users={users}
              displayedUser={displayedUser}
            />
            <LikeDislikeButtons
              setCount={setCount}
              count={count}
              currentUser={currentUser}
              displayedUser={displayedUser}
              connections={connections}
              setConnections={setConnections}
              likes={likes}
              likedMe={likedMe}
            />
          </>
        ) : (
          <ComeAgain currentUser={currentUser} />
        )
      }
    } else {
      return 'something'
    }
  }
  return <div>{showFeed()}</div>
}

export default Home
