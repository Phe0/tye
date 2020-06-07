import api from "./Api";

class LoginService {
  async userLogin(user) {
    const response = await api.post("/user/login", user);
    return response;
  }

  async lawyerLogin(lawyer) {
    const response = await api.post("/lawyer/login", lawyer);
    return response;
  }
}

const loginService = new LoginService();
Object.freeze(loginService);

export default loginService;
