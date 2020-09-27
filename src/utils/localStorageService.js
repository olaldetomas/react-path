const userKey = 'auth.currentUser'

function getToken() {
    const currentUser = JSON.parse(window.localStorage.getItem(userKey))
    if (currentUser) {
        const token = currentUser.token
        return token
    }
    return null
}

function getRefreshToken() {
    const currentUser = JSON.parse(window.localStorage.getItem(userKey))
    if (currentUser) {
        const refreshToken = currentUser.refreshToken
        return refreshToken
    }
    return null
}

function getCurrentUser() {
    const currentUser = JSON.parse(window.localStorage.getItem(userKey))
    if (currentUser) {
        return currentUser
    }
    return null
}

function setToken(token) {
    const currentUser = JSON.parse(window.localStorage.getItem(userKey))
    if (currentUser) {
        currentUser.token = token
        window.localStorage.setItem(userKey, JSON.stringify(currentUser))
        return true
    }
    return false
}

function setRefreshToken(refreshToken) {
    const currentUser = JSON.parse(window.localStorage.getItem(userKey))
    if (currentUser) {
        currentUser.refreshToken = refreshToken
        window.localStorage.setItem(userKey, currentUser)
        return true
    }
    return false
}

function setItem(key, value) {
    const item = JSON.stringify(value)
    window.localStorage.setItem(key, item)
}

function setCurrentUser(value) {
    const item = JSON.stringify(value)
    window.localStorage.setItem(userKey, item)
}

export {
    getToken,
    getRefreshToken,
    setToken,
    setRefreshToken,
    setItem,
    setCurrentUser,
    getCurrentUser
}
