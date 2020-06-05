import api from "./Api";

class ProgressService {
  async getByProcedure(id) {
    const progress = await api.get(`/progress/getByProcedure/${id}`);
    return progress.data;
  }

  async getById(id) {
    const progress = await api.get(`/progress/${id}`);
    return progress.data;
  }

  async newProgress(progress) {
    const response = await api.post("/progress", progress);
    return response;
  }
}

const progressService = new ProgressService();
Object.freeze(progressService);

export default progressService;
