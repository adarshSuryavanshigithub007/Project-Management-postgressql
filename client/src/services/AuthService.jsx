import axios from "axios";

export const AuthService = async (endPoint, data, rawResponse) => {
  const apiUrl = import.meta.env.VITE_BASE_API_URL;
  console.log("API URL:", apiUrl);

  console.log(import.meta.env.REACT_APP_BASE_API_URL);
  const headers = {
    "Content-Type": "application/json",
  };
  try {
    const response = await axios.post(`${apiUrl}/api/auth${endPoint}`, data, {
      headers,
    });
    if (rawResponse) {
      return response;
    }
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
