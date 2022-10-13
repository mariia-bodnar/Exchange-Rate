import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://api.apilayer.com',
  headers: {
    apikey: "aoegS9pHAqK6F9T8CAfcXBSo12jobkSh",
  }
})

export default axiosInstance;