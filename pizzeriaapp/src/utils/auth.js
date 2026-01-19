export const isLoggedIn = () => {
  const user = localStorage.getItem("user");
  return !!user;
};

export const logout = () => {
  localStorage.removeItem("user");
};
