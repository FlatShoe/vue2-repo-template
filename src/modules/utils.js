export const getApiBaseUrl = () => {
  return process.env.API_BASEURL
}
export const getUploadURL = () => {
  return `${getApiBaseUrl()}/upload`
}
