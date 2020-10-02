import axios from 'axios'
import config from '../config/config'

// URL
const appPort = config.APP_PORT
const appHost = config.APP_HOST
const appHttp = config.APP_HTTP
if (process.env.NODE_ENV === 'production') {
    axios.defaults.baseURL = `${appHttp}://${appHost}/api/`
} else {
    axios.defaults.baseURL = `${appHttp}://${appHost}:${appPort}/api/`
}

async function login(authCredentials) {
    return axios
        .post('authenticate/login', authCredentials)
        .then((response) => {
            console.log(response)
            return response.data
        })
        .catch((err) => {
            console.log(err)
            return null
        })
}

async function createPath(data) {
    return axios
        .post('path', data)
        .then((response) => {
            console.log(response)
            return response.data
        })
        .catch((err) => {
            console.log(err)
            return null
        })
}


export {
    login,
    createPath
}
