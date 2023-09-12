class AuthService {
    baseURL = 'http://localhost/bundler-backend';
  
    async login(email: string, password: string) {
      try {
        console.log(email, password)
        const response = await fetch(`${this.baseURL}/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
  
        const data = await response.json();
        return data;
        
      } catch (error) {
        return null;
      }
    }
  }
  
  export default new AuthService();
  