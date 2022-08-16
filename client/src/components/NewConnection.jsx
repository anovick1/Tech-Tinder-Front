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
      <div className="newConnection-text">
        <h1>It's a Match!</h1>
        <p>You and {displayedUser.firstName} are connected!</p>
        <div className="match-options">
          <div className="keep-swipe" onClick={() => viewConnections()}>
            <h3>View Connections</h3>
          </div>
          <div className="keep-swipe" onClick={() => keepSwiping()}>
            <h3>Keep Swiping</h3>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ''
  )
}
export default NewConnection
