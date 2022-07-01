import axios from "axios";

console.log("phoneBookApi:", process.env.VUE_APP_PHONEBOOK_API);

axios.defaults.headers.post["Content-Type"] = "application/json";

const phoneBookApi = axios.create({
  baseURL: process.env.VUE_APP_PHONEBOOK_API,
});

export { phoneBookApi };