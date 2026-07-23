// Save login token
export const login = () => {
  localStorage.setItem("token", "gym-admin-token");
};

// Remove token
export const logout = () => {
  localStorage.removeItem("token");
};

// Check user logged in or not
export const isAuthenticated = () => {
  return localStorage.getItem("token") !== null;
};

