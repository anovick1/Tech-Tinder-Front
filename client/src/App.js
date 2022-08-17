import './styles/App.css'
import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'
import ShowUserFeed from './components/ShowUserFeed'

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
  const [likes, setLikes] = useState([])
  const [likedMe, setLikedMe] = useState([])
  const [viewedUsers, setViewedUsers] = useState([])
  const [currentUser, setCurrentUser] = useState(null)
  const [profile, setProfile] = useState(true)
  const [count, setCount] = useState(0)
  const [viewMatch, setViewMatch] = useState(null)
  const [mobile, setMobile] = useState(window.innerWidth < 600)

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
                  likes={likes}
                  setLikes={setLikes}
                  likedMe={likedMe}
                  setLikedMe={setLikedMe}
                  profile={profile}
                  setProfile={setProfile}
                  viewedUsers={viewedUsers}
                  setViewedUsers={setViewedUsers}
                  mobile={mobile}
                  setMobile={setMobile}
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
                  likes={likes}
                  setLikes={setLikes}
                  likedMe={likedMe}
                  setLikedMe={setLikedMe}
                  viewMatch={viewMatch}
                  setViewMatch={setViewMatch}
                  setViewedUsers={setViewedUsers}
                  viewedUsers={viewedUsers}
                />
              </>
            }
          />
          <Route
            path="/profile/:userId"
            element={
              <>
                <Navbar
                  currentUser={currentUser}
                  setCurrentUser={setCurrentUser}
                  profile={profile}
                  setProfile={setProfile}
                />
                <ShowUserFeed
                  currentUser={currentUser}
                  posts={posts}
                  users={users}
                  displayedUser={viewMatch}
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
