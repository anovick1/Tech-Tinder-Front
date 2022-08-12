import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ currentUser }) => {
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
            <Link to={'/' + currentUser.firstName} className="user-profile">
              <h4>Profile</h4>
            </Link>
            <Link to={'/create-post'} className="user-profile">
              <h4>Make Post</h4>
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
            <h2> Home</h2>
          </Link>
        </div>
        {authUser()}
      </nav>
    </header>
  )
}
export default Navbar
