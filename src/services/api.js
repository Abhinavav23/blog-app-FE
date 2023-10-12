import axios from "axios";

const baseUrl = "http://localhost:5500/api/v1";

const getConfig = () => {
  const token = sessionStorage.getItem("userToken");
  return {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
};

export const post = async (path, data, isConfig = false) => {
  let config;
  if (isConfig) {
    config = getConfig();
  }
  try {
    const response = await axios.post(`${baseUrl}${path}`, data, config);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const get = async (path) => {
  const config = getConfig();
  try {
    const response = await axios.get(`${baseUrl}${path}`, config);
    return response.data;
  } catch (err) {
    throw err;
  }
};
