import axios from "axios";

class LogService {
  baseURL = "http://localhost/bundler-backend";

  async getLogsByPage(pageId: number) {
    try {
      const response = await axios.get(`${this.baseURL}/logs/${pageId}`);
      if (response.data) {
        return response.data;
      } else {
        console.log("Failed to get pages");
        return null;
      }
    } catch (error) {
      console.error("There was an error", error);
      return null;
    }
  }
}

export default new LogService();
