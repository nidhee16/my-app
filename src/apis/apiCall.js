import axios from 'axios'

const apiCall = axios.create({
    baseURL: 'https://express-mongodb-my-app.onrender.com'
})

export default apiCall
