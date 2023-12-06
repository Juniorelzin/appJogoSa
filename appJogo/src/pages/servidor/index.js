import axios from 'axios';

const server = axios.create({
    
   baseURL: "http://10.3.60.226:3000"
    
})
// baseURL: "http://10.3.60.226:3000"
export default server;