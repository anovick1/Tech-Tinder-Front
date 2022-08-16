import React from 'react'
import {LikedUser, GetUserLikes} from '../services/UserServices'

const Connection = ({ profile, setProfile, displayedUser }) => {
  return (
    <div className="profile">
      <div className="edit-icon" id="connections-cond">
        <div className="bio-conditional">
          <div
            className="bio-conditional-type"
            onClick={() => setProfile(true)}
          >
            <h1>Profile</h1>
          </div>
          <div
            className="bio-conditional-type"
            id="bio-selected-type"
            onClick={() => setProfile(false)}
          >
            <h1>Connections</h1>
          </div>
        </div>
      </div>
      <div className="ShownUserName">
        <div>
          <h1>{displayedUser.firstName}'s Connections:</h1>
        </div>
      </div>
    </div>
  )
}

export default Connection
