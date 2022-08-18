import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  GetLikedMe,
  GetUserLikes,
  GetViewedUsers,
  ViewUser
} from '../services/UserServices'
const NewConnection = ({
  displayedUser,
  currentUser,
  connect,
  setConnect,
  count,
  setCount,
  profile,
  setProfile,
  setLikedMe,
  setLikes,
  setViewedUsers
}) => {
  let navigate = useNavigate()

  const keepSwiping = async () => {
    setConnect(false)
    await ViewUser(currentUser.id, displayedUser.id)

    await GetLikedMe(currentUser.id).then((res) => setLikedMe(res[0].liked_me))
    await GetUserLikes(currentUser.id).then((res) => setLikes(res[0].likes))
    await GetViewedUsers(currentUser.id).then((res) =>
      setViewedUsers(res[0].viewed)
    )
  }

  const viewConnections = async () => {
    setConnect(false)
    setProfile(false)
    await ViewUser(currentUser.id, displayedUser.id)

    await GetLikedMe(currentUser.id).then((res) => setLikedMe(res[0].liked_me))
    await GetUserLikes(currentUser.id).then((res) => setLikes(res[0].likes))
    await GetViewedUsers(currentUser.id).then((res) =>
      setViewedUsers(res[0].viewed)
    )

    navigate('/profile')
  }
  return connect ? (
    <div className="newConnection">
      <div className="connect-pfps">
        <div className="match-pfp" id="displayed-match-pfp">
          <img src={displayedUser.pfp_link} />
        </div>
        <div className="match-icon">
          <img src="https://cdn-icons-png.flaticon.com/512/3771/3771451.png" />
        </div>
        <div className="match-pfp" id="current-match-pfp">
          <img src={currentUser.pfp_link} />
        </div>
      </div>
      <div>
        <h1>Match!</h1>
      </div>
      <div className="match-options">
        <div className="match-type-option" onClick={() => viewConnections()}>
          <h5>View Matches</h5>
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
