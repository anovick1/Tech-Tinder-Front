import React, { useState } from 'react'

const EditGender = ({ currentUser, formValues, setFormValues }) => {
  const [genderMClick, setGenderMClick] = useState(
    currentUser.gender === 'Male'
  )
  const [genderFClick, setGenderFClick] = useState(
    currentUser.gender === 'Female'
  )

  const onClickMGender = () => {
    if (genderMClick === true) {
      setGenderFClick(false)
      setGenderMClick(true)
      setFormValues({ ...formValues, firstName: 'Male' })
    } else {
      setGenderMClick(true)
      setFormValues({ ...formValues, gender: 'Male' })
    }
  }
  const onClickFGender = () => {
    if (genderFClick === true) {
      setGenderFClick(true)
      setGenderMClick(false)
      setFormValues({ ...formValues, gender: 'Female' })
    } else {
      setGenderFClick(true)
      setFormValues({ ...formValues, gender: 'Female' })
    }
  }

  const showGender = (gender) => {
    if (genderMClick === true) {
      return (
        <>
          <h4>Gender:</h4>

          <img
            src="https://cdn-icons-png.flaticon.com/512/4080/4080288.png"
            alt="male-icon"
            id="selected-gender"
            onClick={() => onClickMGender()}
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/2284/2284886.png"
            alt="female-icon"
            onClick={() => onClickFGender()}
          />
        </>
      )
    } else {
      return (
        <>
          <h4>Gender:</h4>

          <img
            src="https://cdn-icons-png.flaticon.com/512/4080/4080288.png"
            alt="male-icon"
            onClick={() => onClickMGender()}
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/2284/2284886.png"
            alt="female-icon"
            id="selected-gender"
            onClick={() => onClickFGender()}
          />
        </>
      )
    }
  }

  return showGender(currentUser.gender)
}

export default EditGender
