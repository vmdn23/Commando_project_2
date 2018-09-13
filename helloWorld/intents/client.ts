import axios from 'axios'

export default function(token: string) {
  const headers = {
    'Accept': 'application/json',
    'User-Agent': 'Bearer',
    'Authorization': `token ${token}`
  }

  return axios.create({
    baseURL: 'https://api.github.com',
    timeout: 5000,
    headers
  })
}