import axios from 'axios';

class AuthService {
  baseURL = 'http://localhost/bundler-backend';

  async login(email: string, password: string) {
    try {
      const response = await axios.post(`${this.baseURL}/login`, {
        email,
        password,
      });
      console.log(response)

      return response.data;
      console.log(response)
    } catch (error) {
      return null;
    }
  }
}

export default new AuthService();

  