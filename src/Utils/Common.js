export const getUser = () => {
    const userStr = sessionStorage.getItem("user") || localStorage.getItem("user");
    if (userStr) return JSON.parse(userStr);
    else return null;
};

export const getToken = () => {
    return sessionStorage.getItem("token") || localStorage.getItem("token") || null;
};

// log out
export const removeUserSession = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
};

export const setUserSession = (token, user) => {
    localStorage.setItem("token", token);
};
