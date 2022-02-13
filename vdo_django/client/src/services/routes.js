import Client from './api'

export const CreateUser = async (user) => {
  const res = await Client.post(`/users/`, user)
  return res.data
}

export const FindUser = async (user) => {
  const res = await Client.get(`/username/${user}`)
  return res.data
}

export const GetVideos = async () => {
  const res = await Client.get(`/uploaded/`)
  return res.data
}

export const SpecVideo = async (id) => {
  const res = await Client.get(`/uploaded/${id}`)
  return res.data
}