import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <header>
      <nav>
        <div className="home-nav">
          <Link to="/home">
            <h2> Home</h2>
          </Link>
        </div>
        <div className="user-nav-dropdown">
          <button className="dropbtn">
            <div id="pfp">
              <img src={props.currentUser.pfp_link} alt="pfp" />
            </div>
            <div id="username">
              <h2>
                @<span id="nav">{props.currentUser.firstName}</span>
              </h2>
            </div>
          </button>
          <div className="dropdown-content">
            <Link
              to={'/home/' + props.currentUser.firstName}
              className="user-profile"
            >
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
      </nav>
    </header>
  )
}
export default Navbar
