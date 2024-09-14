import axios from "axios";

const baseURL = import.meta.env.SERVER_NAME;

const axiosClient = axios.create({
  baseURL,
});

axiosClient.interceptors.request.use(
  (config: any) => {
    return {
      ...config,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
  },
  (err: unknown) => console.log(err)
);

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) return response.data;
    else return response;
  },
  (err: unknown) => Promise.reject(err)
);

export default axiosClient;
