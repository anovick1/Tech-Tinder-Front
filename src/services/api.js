import Axios from 'axios'

// export const BASE_URL = 'https://tech-tinder-backend.herokuapp.com/'
// export const BASE_URL = 'http://ec2-54-227-85-17.compute-1.amazonaws.com:3001/'
// export const BASE_URL = 'http://localhost:3001/'
export const BASE_URL = 'https://joyous-tan-cockroach.cyclic.app'

const Client = Axios.create({ baseURL: BASE_URL })

// Intercepts every request axios makes
Client.interceptors.request.use(
  (config) => {
    // Reads the token in localStorage
    const token = localStorage.getItem('token')
    // if the token exists, we set the authorization header
    if (token) {
      config.headers['authorization'] = `Bearer ${token}`
    }
    return config // We return the new config if the token exists or the default config if no token exists.
    // Provides the token to each request that passes through axios
  },
  (error) => Promise.reject(error)
)

export default Client
