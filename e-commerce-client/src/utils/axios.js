import axios from 'axios'
import config from './config'

export default function createAxiosInstance(token = null, type = 'json'){
  const headers = {}
  headers['Content-Type'] = type === 'json' ? 'application/json' : 'multipart/form-data'

  if (token) {
    headers['Authorization'] = `Bearer ${token}`
  }

  return axios.create({
      baseURL: config.api,
      timeout: 10000,
      validateStatus: function (status) {
        return status >= 200 && status < 500
      },
      headers
  })
}
