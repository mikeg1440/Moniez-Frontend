
export {requestHeaders, getOptions, postOptions, deleteOptions, authToken}

const authToken = () => (localStorage.getItem('token'))

const requestHeaders = () => {
  let headers = new Headers()
  headers.append("Content-Type", "application/json")
  headers.append("bearer", authToken())
  return headers
}

const getOptions = () => ({
  method: 'GET',
  headers: requestHeaders(),
  redirect: 'follow'
})

const postOptions = (infoObject) => ({
  method: 'POST',
  headers: requestHeaders(),
  body: JSON.stringify(infoObject),
})

const deleteOptions = (infoObject) => ({
  method: 'DELETE',
  headers: requestHeaders(),
  body: JSON.stringify(infoObject),
})
