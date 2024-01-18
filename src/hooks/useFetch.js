import axios from "axios"
import { useState } from "react"

const useFetch = (baseUrl) => {
  
  const [response, setResponse] = useState()

 // READ
  const getApi = () => {
  const url = `${baseUrl}/users/`
  axios.get(url)
    .then(res => setResponse(res.data))
    .catch(err => console.log(err))
  } 

// CREATE
  const createApi = (data) => {
  const url = `${baseUrl}/users/`
  axios.post(url, data)
    .then(res => {
      setResponse([...response, res.data])
    })
    .catch(err => console.log(err))
  }
// DELETE
const deleteApi = (id) => {
  const url = `${baseUrl}/users/${id}/`
  axios.delete(url)
    .then(res => {
      setResponse(response.filter(user => user.id !== id))
    })
    .catch(err => console.log(err))
  }

// UPDATE
const updateApi = (id, data) => {
  const url = `${baseUrl}/users/${id}/`
  axios.put(url, data)
    .then(res => {
      setResponse(response.map(user => user.id === id ? res.data : user))
    })
    .catch(err => console.log(err))
  }

  return [response, getApi, createApi, deleteApi, updateApi];
}

export default useFetch