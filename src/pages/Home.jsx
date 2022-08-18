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
  setViewedUsers,
  setUsers,
  mobile,
  setMobile
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
    GetUsers().then((res) => setUsers(res))
  }, [currentUser.orientation])
  useEffect(() => {
    if (currentUser != null) {
      GetViewedUsers(currentUser.id).then((res) =>
        setViewedUsers(res[0].viewed)
      )
    }
  }, [currentUser])

  const showFeed = () => {
    if (currentUser != null) {
      let us = []
      for (let i = 0; i < users.length; i++) {
        us.push(users[i])
      }
      if (currentUser.orientation === 'Male') {
        for (let i = 0; i < us.length; i++) {
          for (let j = 0; j < viewedUsers.length; j++) {
            if (us[i].id === viewedUsers[j].id) {
              us.splice(i, 1)
            }
          }
          if (us[i].gender === 'Male' && us[i].id !== currentUser.id) {
            arr.push(us[i])
          }
        }
        displayedUser = arr[count]
        return count < arr.length ? (
          <>
            {!mobile ? (
              <LikeDislikeButtons
                setCount={setCount}
                count={count}
                currentUser={currentUser}
                displayedUser={displayedUser}
                connections={connections}
                setConnections={setConnections}
                likes={likes}
                likedMe={likedMe}
                setLikedMe={setLikedMe}
                setLikes={setLikes}
                setViewedUsers={setViewedUsers}
                connect={connect}
                setConnect={setConnect}
                topLikes={1}
                mobile={mobile}
                setMobile={setMobile}
              />
            ) : (
              ''
            )}
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
              setLikedMe={setLikedMe}
              setLikes={setLikes}
              setViewedUsers={setViewedUsers}
              connect={connect}
              setConnect={setConnect}
              topLikes={0}
              mobile={mobile}
              setMobile={setMobile}
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
              setLikedMe={setLikedMe}
              setLikes={setLikes}
              setViewedUsers={setViewedUsers}
            />
          </>
        ) : (
          <ComeAgain currentUser={currentUser} />
        )
      }
      if (currentUser.orientation === 'Female') {
        for (let i = 0; i < us.length; i++) {
          for (let j = 0; j < viewedUsers.length; j++) {
            if (us[i].id === viewedUsers[j].id) {
              us.splice(i, 1)
            }
          }
          if (us[i].gender === 'Female' && us[i].id !== currentUser.id) {
            arr.push(us[i])
          }
        }
        displayedUser = arr[count]
        return count < arr.length ? (
          <>
            {!mobile ? (
              <LikeDislikeButtons
                setCount={setCount}
                count={count}
                currentUser={currentUser}
                displayedUser={displayedUser}
                connections={connections}
                setConnections={setConnections}
                likes={likes}
                likedMe={likedMe}
                setLikedMe={setLikedMe}
                setLikes={setLikes}
                setViewedUsers={setViewedUsers}
                connect={connect}
                setConnect={setConnect}
                topLikes={1}
                mobile={mobile}
                setMobile={setMobile}
              />
            ) : (
              ''
            )}
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
              setLikedMe={setLikedMe}
              setLikes={setLikes}
              setViewedUsers={setViewedUsers}
              topLikes={0}
              mobile={mobile}
              setMobile={setMobile}
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
              setLikedMe={setLikedMe}
              setLikes={setLikes}
              setViewedUsers={setViewedUsers}
            />
          </>
        ) : (
          <ComeAgain currentUser={currentUser} />
        )
      }
      if (currentUser.orientation === 'Both') {
        for (let i = 0; i < users.length; i++) {
          for (let j = 0; j < viewedUsers.length; j++) {
            if (us[i].id === viewedUsers[j].id) {
              us.splice(i, 1)
            }
          }
          if (us[i].id !== currentUser.id) {
            arr.push(us[i])
          } else {
          }
        }
        displayedUser = arr[count]
        return count < arr.length ? (
          <>
            {!mobile ? (
              <LikeDislikeButtons
                setCount={setCount}
                count={count}
                currentUser={currentUser}
                displayedUser={displayedUser}
                connections={connections}
                setConnections={setConnections}
                likes={likes}
                likedMe={likedMe}
                setLikedMe={setLikedMe}
                setLikes={setLikes}
                setViewedUsers={setViewedUsers}
                connect={connect}
                setConnect={setConnect}
                topLikes={1}
                mobile={mobile}
                setMobile={setMobile}
              />
            ) : (
              ''
            )}
            <ShowUserFeed
              currentUser={currentUser}
              posts={posts}
              users={users}
              displayedUser={displayedUser}
              setConnect={setConnect}
              connect={connect}
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
              setLikedMe={setLikedMe}
              setLikes={setLikes}
              setViewedUsers={setViewedUsers}
              topLikes={0}
              mobile={mobile}
              setMobile={setMobile}
              setConnect={setConnect}
              connect={connect}
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
              setLikedMe={setLikedMe}
              setLikes={setLikes}
              setViewedUsers={setViewedUsers}
            />
          </>
        ) : (
          <ComeAgain currentUser={currentUser} />
        )
      }
    } else {
      return ''
    }
  }
  return <div>{showFeed()}</div>
}

export default Home
