import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'ee1078b84d694e5ba60229c826c6ae47x'
    }
})
