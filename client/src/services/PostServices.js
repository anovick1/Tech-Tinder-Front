import Client from './api'

const GetImagePosts = async () => {
  try {
    const res = await Client.get('/imageposts/all')
    return res.data
  } catch (error) {
    throw error
  }
}

const GetVideoPosts = async () => {
  try {
    const res = await Client.get('/videoposts/all')
    return res.data
  } catch (error) {
    throw error
  }
}

const GetWrittenPosts = async () => {
  try {
    const res = await Client.get('/writtenposts/all')
    return res.data
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetImagePosts,
  GetVideoPosts,
  GetWrittenPosts
}
