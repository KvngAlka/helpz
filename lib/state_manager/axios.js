import axios from "axios";


// config();

const axiosInstance = axios.create({
    baseURL :  "/"  //"http://localhost:3000"
})

export default axiosInstance