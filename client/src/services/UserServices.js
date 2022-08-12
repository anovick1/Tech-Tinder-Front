import Client from './api'

export const GetUserById = async (id) => {
  try {
    const res = await Client.get('/users/' + id)
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

export const GetUsersLikes = async (user_id, liked_id) => {
  try {
    const res = await Client.post(`/users/like/${user_id}/${liked_id}`)
    return res.data
  } catch (error) {
    throw error
  }
}
