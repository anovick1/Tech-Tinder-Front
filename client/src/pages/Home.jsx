import React, { useState, useEffect } from 'react'

const Home = ({ currentUser, posts, users }) => {
  const [count, setCount] = useState(1)

  const arr = []

  //// conditional that shows social link if not null
  const showSocials = () => {}

  const showFeed = () => {
    if (currentUser.orientation === 'Male') {
      for (let i = 0; i < users.length; i++) {
        if (users[i].gender === 'Male' && users[i].id != currentUser.id) {
          arr.push(users[i])
        }
      }
      const interest = users[count]
      return (
        <div className="profile">
          <div className="name,bio,stats">
            <h1>
              {interest.firstName} {interest.lastName}
            </h1>
            <img src={interest.pfp_link} alt="pfp" />
            <h4>
              Location: {interest.city}, {interest.state}
            </h4>
            <h4>Age: {interest.age}</h4>
            <h4>Interested In: {interest.orientation}</h4>
          </div>
        </div>
      )
    }
    if (currentUser.orientation === 'Female') {
      return 'vag'
    }
    if (currentUser.orientation === 'Both') {
      return 'vag + dong'
    }
  }
  return <div>{showFeed()}</div>
}

export default Home
