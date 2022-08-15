import React, { useState, useEffect } from 'react'
import { DeleteUserAccount } from '../services/UserServices'
import { useNavigate } from 'react-router-dom'

const DeleteUser = ({ setCurrentUser, currentUser }) => {
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
    await DeleteUserAccount(currentUser.id)
    setCurrentUser(null)
    localStorage.clear()
    navigate('/')
  }

  return !deleteA ? (
    <div className="Delete" id="delete-show">
      <h3 onClick={() => deleteAccount()}>Delete Account</h3>
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
