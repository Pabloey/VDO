import Client from './api'

export const CreateUser = async (user) => {
  const res = await Client.post(`/users/`, user)
  return res.data
}

export const FindUser = async (user) => {
  const res = await Client.get(`/username/${user}`)
  return res.data
}

export const GetUser = async (user) => {
  const res = await Client.get(`/users/${user}`)
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

export const SubmitComment = async (comment) => {
  const res = await Client.post(`/comments/`, comment)
  return res.data
}

export const SubmitVideo = async (video) => {
  const res = await Client.post(`/uploaded/`, video)
  return res.data
}

export const DeleteVideo = async (video) => {
  const res = await Client.delete(`/uploaded/${video}`)
  return res.data
}

export const EditVideoDetails = async (video) => {
  const res = await Client.put(`/uploaded/${video.id}`, video)
  return res
}

export const DeleteComment = async (comment) => {
  const res = await Client.delete(`/comments/${comment}`)
  return res
}

export const EditCommentDetail = async (comment) => {
  const res = await Client.put(`/comments/${comment.id}`, comment)
  return res
}