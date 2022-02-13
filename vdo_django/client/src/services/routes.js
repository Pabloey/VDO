import Client from './api'

export const CreateUser = async (user) => {
  const res = await Client.post(`/users/`, user)
  return res.data
}

export const FindUser = async (user) => {
  const res = await Client.get(`/username/${user}`)
  return res.data
}