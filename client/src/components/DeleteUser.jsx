import React, { useState, useEffect } from 'react'
import {
  DeleteUserAccount,
  DeleteLike,
  GetLikedMe,
  GetUserLikes,
  GetViewedUsers,
  DeleteView,
  GetViewedMe
} from '../services/UserServices'
import { useNavigate } from 'react-router-dom'

const DeleteUser = ({
  setCurrentUser,
  currentUser,
  likes,
  setLikes,
  likedMe,
  setLikedMe,
  setViewedUsers,
  viewedUsers
}) => {
  let navigate = useNavigate()
  const [deleteA, setDeleteA] = useState(false)

  const deleteAccount = () => {
    if (!deleteA) {
      setDeleteA(true)
    } else if (deleteA) {
      setDeleteA(false)
    }
  }
  const deleteUserAcc = async () => {
    await GetUserLikes(currentUser.id).then((res) => setLikes(res[0].likes))
    if (likes.length >= 1) {
      for (let i = 0; i < likes.length; i++) {
        await DeleteLike(parseInt(currentUser.id), parseInt(likes[i].id))
      }
    }
    await GetLikedMe(currentUser.id).then((res) => setLikedMe(res[0].liked_me))
    if (likedMe.length >= 1) {
      for (let i = 0; i < likedMe.length; i++) {
        await DeleteLike(parseInt(likedMe[i].id), parseInt(currentUser.id))
      }
    }
    await GetViewedUsers(currentUser.id).then((res) =>
      setViewedUsers(res[0].viewed)
    )
    if (viewedUsers.length >= 1) {
      for (let i = 0; i < viewedUsers.length; i++) {
        await DeleteView(
          parseInt(parseInt(currentUser.id), parseInt(viewedUsers[i].id))
        )
      }
    }
    let v = await GetViewedMe(currentUser.id)
    let vw = v[0].viewedMe
    if (vw.length >= 1) {
      for (let i = 0; i < vw.length; i++) {
        await DeleteView(parseInt(parseInt(vw[i].id)), parseInt(currentUser.id))
      }
    }
    await DeleteUserAccount(currentUser.id)
    setCurrentUser(null)
    localStorage.clear()
    navigate('/')
  }

  return !deleteA ? (
    <div className="Delete" id="delete-show" onClick={() => deleteAccount()}>
      <h3>Delete Account</h3>
    </div>
  ) : (
    <div className="Delete">
      <div>
        <h4>Are you sure you want to delete your account?</h4>
      </div>
      <div className="delete-buttons">
        <img
          src="https://freeiconshop.com/wp-content/uploads/edd/cross-flat.png"
          alt="edit"
          onClick={() => deleteAccount()}
        />
        <img
          src="https://freeiconshop.com/wp-content/uploads/edd/checkmark-flat.png"
          alt="edit"
          onClick={() => deleteUserAcc()}
        />
      </div>
    </div>
  )
}

export default DeleteUser
