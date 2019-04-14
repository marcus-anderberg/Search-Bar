import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID e311ef393325c717a87de8f962753252791a8546733ace8328f48ff4f15f9805"
  }
});
