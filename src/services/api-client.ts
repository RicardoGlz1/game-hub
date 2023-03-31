import axios from "axios";
export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params:{
        key: '10d36516374b4372a5878befcf62eabe'
    }
})