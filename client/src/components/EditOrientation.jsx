import React, { useState } from 'react'

const EditOrientation = ({ currentUser, formValues, setFormValues }) => {
  const [orientationMClick, setOrientationMClick] = useState(
    currentUser.orientation === 'Male' || currentUser.orientation === 'Both'
  )
  const [orientationFClick, setOrientationFClick] = useState(
    currentUser.orientation === 'Female' || currentUser.orientation === 'Both'
  )
  const onClickMOrientation = async () => {
    if (orientationMClick === true && orientationFClick === true) {
      setOrientationMClick(false)
      setFormValues({ ...formValues, orientation: 'Female' })
    } else if (orientationMClick === true && orientationFClick === false) {
      console.log('b')
      setOrientationMClick(true)
      setFormValues({ ...formValues, orientation: 'Male' })
    } else if (orientationMClick === false && orientationFClick === true) {
      setOrientationMClick(true)
      setFormValues({ ...formValues, orientation: 'Both' })
    }
  }
  const onClickFOrientation = async () => {
    if (orientationFClick === true && orientationMClick === true) {
      setOrientationFClick(false)
      setFormValues({ ...formValues, orientation: 'Male' })
    } else if (orientationFClick === true && orientationMClick === false) {
      setOrientationFClick(true)
      setFormValues({ ...formValues, orientation: 'Female' })
    } else if (orientationFClick === false && orientationMClick === true) {
      setOrientationFClick(true)
      setFormValues({ ...formValues, orientation: 'Both' })
    }
  }
  const showOrientation = (gender) => {
    if (orientationMClick === true && orientationFClick === false) {
      return (
        <>
          <h4>Interest:</h4>
          <img
            src="https://cdn-icons-png.flaticon.com/512/4080/4080288.png"
            alt="male-icon"
            id="selected-gender"
            onClick={() => onClickMOrientation()}
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/2284/2284886.png"
            alt="female-icon"
            onClick={() => onClickFOrientation()}
          />
        </>
      )
    } else if (orientationMClick === true && orientationFClick === true) {
      return (
        <>
          <h4>Interest:</h4>
          <img
            src="https://cdn-icons-png.flaticon.com/512/4080/4080288.png"
            alt="male-icon"
            id="selected-gender"
            onClick={() => onClickMOrientation()}
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/2284/2284886.png"
            alt="female-icon"
            id="selected-gender"
            onClick={() => onClickFOrientation()}
          />
        </>
      )
    } else if (orientationMClick === false && orientationFClick === true) {
      return (
        <>
          <h4>Interest:</h4>
          <img
            src="https://cdn-icons-png.flaticon.com/512/4080/4080288.png"
            alt="male-icon"
            onClick={() => onClickMOrientation()}
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/2284/2284886.png"
            alt="female-icon"
            id="selected-gender"
            onClick={() => onClickFOrientation()}
          />
        </>
      )
    } else {
      return (
        <>
          <h4>Interest:</h4>
          <img
            src="https://cdn-icons-png.flaticon.com/512/4080/4080288.png"
            alt="male-icon"
            onClick={() => onClickMOrientation()}
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/2284/2284886.png"
            alt="female-icon"
            onClick={() => onClickFOrientation()}
          />
        </>
      )
    }
  }
  return showOrientation(currentUser.gender)
}

export default EditOrientation
