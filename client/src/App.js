import './styles/App.css'
import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'
import {
  GetImagePosts,
  GetVideoPosts,
  GetWrittenPosts
} from './services/PostServices'
import { GetUsers, GetLikedMe, GetUserLikes } from './services/UserServices'
import { CheckSession } from './services/Auth'

function App() {
  const [users, setUsers] = useState([])
  const [posts, setPosts] = useState([])
  const [connections, setConnections] = useState([])

  const [currentUser, setCurrentUser] = useState(null)
  const [profile, setProfile] = useState(true)
  const [count, setCount] = useState(0)
  const handleLogOut = () => {
    //Reset all auth related state and clear localStorage
    setCurrentUser(null)
    localStorage.clear()
  }

  const checkToken = async () => {
    //If a token exists, sends token to localStorage to persist logged in user
    const user = await CheckSession()
    setCurrentUser(user)
  }
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  const allPosts = []
  const chicken = (res) => {
    for (let i = 0; i < res.length; i++) {
      allPosts.push(res[i])
    }
  }
  useEffect(() => {
    GetImagePosts().then((res) => chicken(res))
    GetVideoPosts().then((res) => chicken(res))
    GetWrittenPosts().then((res) => chicken(res))
    setPosts(allPosts)
  }, [])
  useEffect(() => {
    GetUsers().then((res) => setUsers(res))
  }, [])

  // useEffect(() => {
  //   GetLikedMe(currentUser.id).then((res) => setLikedMe(res))
  //   GetUserLikes(currentUser.id).then((res) => setLikes(res))
  //   // let c
  //   // for (let i = 0; i < likes.likes.length; i++) {
  //   //   for (let j = 0; i < likedMe.liked_me.length; j++) {
  //   //     console.log(likes[i])
  //   //     if (likes.likes[i].id === likedMe.liked_me[i].id) {
  //   //       c.push(likes[i].id)
  //   //     }
  //   //   }
  //   // }

  //   // setConnections(c)
  // }, [])
  return (
    <div>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <SignIn
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
                users={users}
                setUsers={setUsers}
                posts={posts}
                setPosts={setPosts}
                count={count}
                setCount={setCount}
              />
            }
          />
          <Route
            path="/home"
            element={
              <>
                <Navbar
                  currentUser={currentUser}
                  setCurrentUser={setCurrentUser}
                  profile={profile}
                  setProfile={setProfile}
                />
                <Home
                  users={users}
                  posts={posts}
                  setUsers={setUsers}
                  setPosts={setPosts}
                  currentUser={currentUser}
                  setCurrentUser={setCurrentUser}
                  connections={connections}
                  setConnections={setConnections}
                />
              </>
            }
          />

          <Route
            path="/profile"
            element={
              <>
                <Navbar
                  currentUser={currentUser}
                  setCurrentUser={setCurrentUser}
                  profile={profile}
                  setProfile={setProfile}
                />
                <Profile
                  users={users}
                  posts={posts}
                  setPosts={setPosts}
                  currentUser={currentUser}
                  setCurrentUser={setCurrentUser}
                  profile={profile}
                  setProfile={setProfile}
                  connections={connections}
                  setConnections={setConnections}
                />
              </>
            }
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
