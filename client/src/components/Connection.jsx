import React from 'react'
import { LikedUser, GetUserLikes } from '../services/UserServices'
import { useNavigate } from 'react-router-dom'

const Connection = ({
  profile,
  setProfile,
  displayedUser,
  connections,
  users,
  viewMatch,
  setViewMatch
}) => {
  // let arr = connections
  let navigate = useNavigate()
  const goProfile = (user) => {
    setViewMatch(user)
    navigate(`/profile/${user.id}`)
  }
  const showConnect = (c) => {
    for (let i = 0; i < users.length; i++) {
      if (users[i].id === c) {
        return (
          <div className="each-connection" onClick={() => goProfile(users[i])}>
            <div className="match-icon-connections">
              <img src="https://cdn-icons-png.flaticon.com/512/3771/3771451.png" />
            </div>
            <div className="connection">
              <div className="connect-pfp">
                <img src={users[i].pfp_link} alt="pfp" />
              </div>
              <div className="connect-name">
                <h2>
                  {users[i].firstName} {users[i].lastName}
                </h2>
              </div>
            </div>
          </div>
        )
      }
    }
  }

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
      <div className="shown-connections">
        {connections.map((c, index) => (
          <div key={index}>{showConnect(c)}</div>
        ))}
      </div>
    </div>
  )
}

export default Connection
