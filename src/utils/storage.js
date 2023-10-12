export const setToken= (token) => {
    sessionStorage.setItem('userToken', token);
}

export const isLoggedIn = () => {
    const token = sessionStorage.getItem('userToken');
    return token ? true: false
}

export const removeToken = () => {
    sessionStorage.removeItem('userToken')
}