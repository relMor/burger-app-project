import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-f711a.firebaseio.com/",
});

export default instance;
