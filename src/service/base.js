import axios from 'axios'

const baseURL = '/'
const ERR_OK = 0

axios.defaults.baseURL = baseURL

export const get = (url, params) => {
  return axios
    .get(url, { params })
    .then(res => {
      const serverData = res.data
      if (serverData.code === ERR_OK) {
        return serverData.result
      }
    })
    .catch(err => {
      console.log(err)
    })
}
