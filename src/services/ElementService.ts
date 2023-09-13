import axios from "axios";

class ElementService {
  baseURL = "http://localhost/bundler-backend";

  fetchAllElements() {
    return axios
      .get(`${this.baseURL}/elements`) // replace 'elements' with the actual endpoint
      .then((response) => response.data)
      .catch((error) => {
        console.error("An error occurred while fetching data: ", error);
      });
  }
}

export default new ElementService();
