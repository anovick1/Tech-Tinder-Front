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

function App() {
  const [users, setUsers] = useState([])
  const [posts, setPosts] = useState([])
  const [currentUser, setCurrentUser] = useState({})
  // console.log(currentUser)

  const allPosts = []
  const chicken = (res) => {
    for (let i = 0; i < res.length; i++) {
      allPosts.push(res[i])
    }
  }
  useEffect(() => {
    GetImagePosts().then((res) => chicken(res))
    // console.log(allPosts)
    GetVideoPosts().then((res) => chicken(res))
    // console.log(allPosts)
    GetWrittenPosts().then((res) => chicken(res))
    // console.log(allPosts)
    setPosts(allPosts)
  }, [])
  console.log(posts)
  // console.log(GetImagePosts())
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
                  users={users}
                />
                <Home
                  users={users}
                  posts={posts}
                  setUsers={setUsers}
                  setPosts={setPosts}
                  currentUser={currentUser}
                  setCurrentUser={setCurrentUser}
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
                />
                <Profile
                  users={users}
                  posts={posts}
                  setPosts={setPosts}
                  currentUser={currentUser}
                  setCurrentUser={setCurrentUser}
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
