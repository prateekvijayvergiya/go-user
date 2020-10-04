import axios from 'axios'

const BASE_URL = 'https://dummyapi.io/data/api'
const APP_ID = '5f730c499b5ce2eee9e098bb'

export const getAllUsers = async () => {
  let users = await axios.get(`${BASE_URL}/user`, { headers: { 'app-id': APP_ID } })
  .then(({data}) => {
    return data
  })
  return users
}