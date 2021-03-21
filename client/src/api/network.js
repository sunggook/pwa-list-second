import axios from 'axios'

let server_address = window.location.hostname;

if (server_address === "localhost" || server_address === "127.0.0.1")
  server_address = 'http://localhost:3000';

export default axios.create({
  baseURL:server_address,
});
