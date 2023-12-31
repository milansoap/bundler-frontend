import axios from "axios";

class ElementService {
  baseURL = "http://localhost/bundler-backend";

  fetchAllNonCustomElements() {
    return axios
      .get(`${this.baseURL}/elements/not-custom`) // replace 'elements' with the actual endpoint
      .then((response) => response.data)
      .catch((error) => {
        console.error("An error occurred while fetching data: ", error);
      });
  }

  async fetchAllElementsForPage(id: number) {

  }
}

export default new ElementService();
