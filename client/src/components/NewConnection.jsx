import React from 'react'
import { useNavigate } from 'react-router-dom'

const NewConnection = ({
  displayedUser,
  currentUser,
  connect,
  setConnect,
  count,
  setCount,
  profile,
  setProfile
}) => {
  let navigate = useNavigate()

  const keepSwiping = () => {
    let likeCount = count + 1
    setCount(likeCount)
    setConnect(false)
  }

  const viewConnections = () => {
    let likeCount = count + 1
    setCount(likeCount)
    setConnect(false)
    setProfile(false)
    navigate('/profile')
  }

  return connect ? (
    <div className="newConnection">
      <div className="connect-pfps">
        <div className="match-pfp">
          <img src={displayedUser.pfp_link} />
        </div>
        <div className="match-icon">
          <img src="https://cdn-icons-png.flaticon.com/512/3771/3771451.png" />
        </div>
        <div className="match-pfp">
          <img src={currentUser.pfp_link} />
        </div>
      </div>
      <div>
        <h1>Match!</h1>
      </div>
      <div className="match-options">
        <div className="match-type-option" onClick={() => viewConnections()}>
          <h5>View Connections</h5>
        </div>
        <div className="match-type-option" onClick={() => keepSwiping()}>
          <h5>Keep Swiping</h5>
        </div>
      </div>
    </div>
  ) : (
    ''
  )
}
export default NewConnection
