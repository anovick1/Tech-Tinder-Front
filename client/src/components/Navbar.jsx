import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ currentUser, profile, setProfile }) => {
  const authUser = () => {
    if (currentUser != null) {
      return (
        <div className="user-nav-dropdown">
          <button className="dropbtn">
            <div id="pfp">
              <img src={currentUser.pfp_link} alt="pfp" />
            </div>
            <div id="username">
              <h2>
                <span id="nav">{currentUser.firstName}</span>
              </h2>
            </div>
          </button>
          <div className="dropdown-content">
            <Link
              to={'/profile'}
              className="user-profile"
              onClick={() => setProfile(true)}
            >
              <h4>Profile</h4>
            </Link>

            <Link
              to={'/profile'}
              className="user-profile"
              onClick={() => setProfile(false)}
            >
              <h4>Connections</h4>
            </Link>

            <Link to="/">
              <h4>Logout</h4>
            </Link>
          </div>
        </div>
      )
    } else {
      return ''
    }
  }

  return (
    <header>
      <nav>
        <div className="home-nav">
          <Link to="/home">
            <h2>Home</h2>
          </Link>
        </div>
        {authUser()}
      </nav>
    </header>
  )
}
export default Navbar
