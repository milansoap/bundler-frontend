import axios from "axios";
import { MyElement } from "../models/MyElement";

class PageService {
  baseURL = "http://localhost/bundler-backend";

  // Fetch all pages for a specific user
  async getPagesByUserId(userId: number) {
    try {
      const response = await axios.get(`${this.baseURL}/pages/user/${userId}`);
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
  // Fetch all elements for a specific page
  async getElementsByPageId(pageId: number) {
    try {
      const response = await axios.get(
        `${this.baseURL}/elements/page/${pageId}`
      );
      if (response.data) {
        return response.data;
      } else {
        console.log("Failed to get elements");
        return null;
      }
    } catch (error) {
      console.error("There was an error", error);
      return null;
    }
  }

  async saveElements(elements: MyElement[], pageId: number) {
    try {
      console.log(elements)
      const response = await axios.post(
        `${this.baseURL}/pages/save/${pageId}` , // change to your actual API endpoint
        {
          elements,
        }
      );
      if (response.data) {
        console.log("Elements saved successfully");
        return response.data;
      } else {
        console.log("Failed to save elements");
        return null;
      }
    } catch (error) {
      console.error("There was an error while saving", error);
      return null;
    }
  }
}

export default new PageService();
