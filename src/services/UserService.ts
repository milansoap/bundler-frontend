class AuthService {
    baseURL = process.env.REACT_APP_BASE_URL || 'http://localhost/bundler-backend';

    async getAllUsers() {
        try {
            const response = await fetch(`${this.baseURL}/users`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            const data = await response.json();

            if (data.success) {
                console.log(data)
                console.log(data)
            } else {
                alert("Login failed");
                return null;
            }
        } catch (error) {
            console.error("There was an error ", error);
            return null;
        }
    }
}

export default new AuthService();
