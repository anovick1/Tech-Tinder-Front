import Client from './api'

export const GetUserById = async (id) => {
  try {
    const res = await Client.get('/users/' + id)
    return res.data
  } catch (error) {
    throw error
  }
}
export const DeleteUserAccount = async (user_id) => {
  try {
    const res = await Client.delete('/users/' + user_id)
    return res.data
  } catch (error) {
    throw error
  }
}
export const GetUsers = async (id) => {
  try {
    const res = await Client.get('/users/all')
    return res.data
  } catch (error) {
    throw error
  }
}

export const LikeUser = async (user_id, liked_id) => {
  try {
    const res = await Client.post(`/users/like/${user_id}/${liked_id}`)
    return res.data
  } catch (error) {
    throw error
  }
}
export const ViewUser = async (user_id, viewed_id) => {
  try {
    const res = await Client.post(`/users/view/${user_id}/${viewed_id}`)
    return res.data
  } catch (error) {
    throw error
  }
}
export const GetUserLikes = async (id) => {
  try {
    const res = await Client.get('/users/liked/' + id)
    return res.data
  } catch (error) {
    throw error
  }
}
export const GetLikedMe = async (id) => {
  try {
    const res = await Client.get('/users/likedme/' + id)
    return res.data
  } catch (error) {
    throw error
  }
}
export const GetViewedUsers = async (id) => {
  try {
    const res = await Client.get('/users/view/' + id)
    return res.data
  } catch (error) {
    throw error
  }
}
export const GetViewedMe = async (id) => {
  try {
    const res = await Client.get('/users/viewme/' + id)
    return res.data
  } catch (error) {
    throw error
  }
}

export const updateUser = async (user_id, body) => {
  try {
    const user = await Client.put('/users/' + user_id, {
      firstName: body.firstName,
      lastName: body.lastName,
      city: body.city,
      state: body.state,
      age: body.age,
      gender: body.gender,
      orientation: body.orientation,
      ig_link: body.ig_link,
      fb_link: body.fb_link,
      li_link: body.li_link,
      pfp_link: body.pfp_link,
      bio: body.bio
    })
    return user.data
  } catch (error) {
    throw error
  }
}

export const DeleteLike = async (userId, liked_id) => {
  try {
    const res = await Client.delete('/users/like/' + userId + '/' + liked_id)
    return res.data
  } catch (error) {
    throw error
  }
}
export const DeleteView = async (userId, liked_id) => {
  try {
    const res = await Client.delete('/users/view/' + userId + '/' + liked_id)
    return res.data
  } catch (error) {
    throw error
  }
}
