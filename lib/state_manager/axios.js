import axios from "axios";


// config();

const axiosInstance = axios.create({
    baseURL :  "https//helpz.vercel.app"  //"http://localhost:3000"
})

export default axiosInstance