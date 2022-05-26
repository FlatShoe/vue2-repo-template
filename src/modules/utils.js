export const getApiBaseUrl = () => {
  return process.env.API_BASEURL
}
export const getUserInfoUrl = () => {
  return `${getApiBaseUrl()}/getUserInfo`
}
export const getUploadURL = () => {
  return `${getApiBaseUrl()}/upload`
}