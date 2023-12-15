import axios from "axios";

const baseURL = 'http://localhost:5000/api';

const CallApi = axios.create({
    baseURL
});


export default CallApi;