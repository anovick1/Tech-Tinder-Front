import Client from './api'

export const GetImagePosts = async () => {
  try {
    const res = await Client.get('/imageposts/all')
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetVideoPosts = async () => {
  try {
    const res = await Client.get('/videoposts/all')
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetWrittenPosts = async () => {
  try {
    const res = await Client.get('/writtenposts/all')
    return res.data
  } catch (error) {
    throw error
  }
}

export const CreateImagePost = async (body) => {
  try {
    const res = await Client.post('/imageposts', body)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CreateVideoPost = async () => {
  try {
    const res = await Client.post('/videoposts')
    return res.data
  } catch (error) {
    throw error
  }
}

export const CreateWrittenPost = async () => {
  try {
    const res = await Client.post('/writtenposts')
    return res.data
  } catch (error) {
    throw error
  }
}
