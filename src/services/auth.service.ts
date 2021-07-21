import axios from "axios";

const API_URL = "http://localhost:3001/api/auth/";

const register = (username: string, email: string, password: string, avatar: {}) => {
  return axios.post(API_URL + "register", {
    username,
    email,
    password,
    avatar
  });
};

const login = (username: string, password: string) => {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};
