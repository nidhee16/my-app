import axios from 'axios'

const apiCall = axios.create({
    baseURL: 'https://fakestoreapi.com'
})

export default apiCall