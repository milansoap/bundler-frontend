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
      // Conversion function
      const convertToPHPFormat = (element: MyElement) => ({
        id: element.id,
        type: element.type,
        name: element.name,
        is_custom: element.is_custom,
        configuration: element.configuration,
        unique_element_id: element.unique_element_id, // You can generate this if needed
        page_id: element.page_id,
      });

      // Convert elements to the expected PHP format
      const convertedElements = elements.map(convertToPHPFormat);

      console.log(convertedElements);

      // Make the Axios request
      const response = await axios.post(
        `${this.baseURL}/pages/save/${pageId}`, // Change to your actual API endpoint
        {
          elements: convertedElements,
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
