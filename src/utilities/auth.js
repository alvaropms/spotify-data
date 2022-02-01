export function login(token){
    localStorage.setItem('token', token);
}

export function isLogged(){
    return localStorage.getItem('token') !== null &&
    localStorage.getItem('token') !== undefined &&
    localStorage.getItem('token') !== '' &&
    localStorage.getItem('token') !== 'undefined'
}

export function logout(){
    localStorage.removeItem('token');
}

export function getToken(){
    return localStorage.getItem('token');
}