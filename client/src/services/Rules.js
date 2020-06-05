import api from "./Api";

class RulesService {
  async getByLawyer(id) {
    const response = await api.get(`/rule/getByLawyer/${id}`);
    return response.data;
  }

  async getRules() {
    const response = await api.get(`/rule`);
    return response.data;
  }

  async getRuleById(id) {
    const response = await api.get(`/rule/${id}`);
    return response.data;
  }

  async newRule(rule) {
    const response = await api.post("/rule", rule);
    return response;
  }

  async deleteRule(id) {
    const response = await api.delete(`/rule/${id}`);
    return response;
  }
}

const rulesService = new RulesService();
Object.freeze(rulesService);

export default rulesService;
