import axios from "axios";

// TODO: Add Server Deployment Link
const BACKEND_ORIGIN_URL = "https://formbot-server-production.up.railway.app";

const Login = async (email, password) => {
  try {
    const response = await axios.post(`${BACKEND_ORIGIN_URL}/login`, {
      email,
      password,
    });
    return response;
  } catch (error) {
    return error.response.data;
  }
};

const Register = async (userName, email, password) => {
  try {
    const response = await axios.post(`${BACKEND_ORIGIN_URL}/signup`, {
      userName,
      email,
      password,
    });
    console.log(response.data);
    return response;
  } catch (error) {
    return error.response.data;
  }
};

export { Login, Register };
