export const setToLocalStorage = (key, value) => {
    localStorage.setItem(key, value);
};

export const getFromLocalStorage = key => {
    return localStorage.getItem(key);
};

export const removeFromLocalStorage = key => {
    localStorage.removeItem(key);
}

export const clearLocalStroage = () => {
    localStorage.clear();
}

export const setToSessionStorage =  (key, value) => {
    sessionStorage.setItem(key, value);
}

export const getFromSessionStorage = key => {
    return sessionStorage.getItem(key);
}

export const removeFromSessionStorage = key => {
    sessionStorage.removeItem(key);
}

export const clearSessionStorage = () => {
    sessionStorage.clear();
}