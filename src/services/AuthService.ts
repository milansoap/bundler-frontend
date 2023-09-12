import axios from 'axios';

class AuthService {
  baseURL = 'http://localhost/bundler-backend';

  async login(email: string, password: string) {
    try {
      const response = await axios.post(`${this.baseURL}/login`, {
        email,
        password,
      });
      return response.data;
    } catch (error) {
      return null;
    }
  }
}

export default new AuthService();

  