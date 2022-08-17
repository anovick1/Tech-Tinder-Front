import React, { useState, useEffect } from 'react'
import ShowUserFeed from '../components/ShowUserFeed'
import LikeDislikeButtons from '../components/LikeDislikeButtons'
import ComeAgain from '../components/ComeAgain'
import {
  GetUsers,
  GetLikedMe,
  GetUserLikes,
  GetViewedUsers
} from '../services/UserServices'
import NewConnection from '../components/NewConnection'

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
  setLikedMe,
  profile,
  setProfile,
  viewedUsers,
  setViewedUsers
}) => {
  const [count, setCount] = useState(0)
  const [connect, setConnect] = useState(false)

  const arr = []
  let displayedUser = arr[count]

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

  useEffect(() => {
    if (currentUser != null) {
      GetViewedUsers(currentUser.id).then((res) =>
        setViewedUsers(res[0].viewed)
      )
    }
  }, [currentUser])
  const showFeed = () => {
    if (currentUser != null) {
      const u = users
      if (currentUser.orientation === 'Male') {
        for (let i = 0; i < u.length; i++) {
          for (let j = 0; j < viewedUsers.length; j++) {
            if (u[i].id === viewedUsers[j].id) {
              u.splice(i, 1)
            }
          }
          if (u[i].gender === 'Male' && u[i].id !== currentUser.id) {
            arr.push(u[i])
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
              connect={connect}
              setConnect={setConnect}
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
              connect={connect}
              setConnect={setConnect}
            />
            <NewConnection
              displayedUser={displayedUser}
              currentUser={currentUser}
              connect={connect}
              setConnect={setConnect}
              count={count}
              setCount={setCount}
              profile={profile}
              setProfile={setProfile}
            />
          </>
        ) : (
          <ComeAgain currentUser={currentUser} />
        )
      }
      if (currentUser.orientation === 'Female') {
        for (let i = 0; i < users.length; i++) {
          for (let j = 0; j < viewedUsers.length; j++) {
            if (u[i].id === viewedUsers[j].id) {
              u.splice(i, 1)
            }
          }
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
              connect={connect}
              setConnect={setConnect}
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
              connect={connect}
              setConnect={setConnect}
            />
            <NewConnection
              displayedUser={displayedUser}
              currentUser={currentUser}
              connect={connect}
              setConnect={setConnect}
              count={count}
              setCount={setCount}
              profile={profile}
              setProfile={setProfile}
            />
          </>
        ) : (
          <ComeAgain currentUser={currentUser} />
        )
      }
      if (currentUser.orientation === 'Both') {
        for (let i = 0; i < users.length; i++) {
          for (let j = 0; j < viewedUsers.length; j++) {
            if (u[i].id === viewedUsers[j].id) {
              u.splice(i, 1)
            }
          }
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
