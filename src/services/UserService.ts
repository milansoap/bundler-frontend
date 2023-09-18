import axios from "axios";

class UserService {
  baseURL = "http://localhost/bundler-backend";

  async getAllUsers() {
    try {
      const response = await axios.get(`${this.baseURL}/users`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.data.success) {
        console.log(response.data);
      } else {
        alert("Login failed");
      }
    } catch (error) {
      console.error("There was an error", error);
    }
  }

  async getCurrentUser() {
    const token = localStorage.getItem("authToken");
    if (!token) return null;

    try {
      const response = await axios.get(`${this.baseURL}/users/current`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        transformResponse: [
          function (data) {
            return JSON.parse(data.replace("null", ""));
          },
        ],
      });

      const data = response.data;

      if (data.success) {
        return {
          id: data.user.id,
          email: data.user.email,
        };
      } else {
        console.log("Failed to get user");
        return null;
      }
    } catch (error) {
      console.error("There was an error", error);
      return null;
    }
  }
}

export default new UserService();
