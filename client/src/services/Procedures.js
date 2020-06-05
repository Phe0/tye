import api from "./Api";

class ProceduresService {
  async getProcedures() {
    const procedures = await api.get("/procedure");
    return procedures.data;
  }

  async newProcedure(procedure) {
    const response = await api.post("procedure", procedure);
    return response;
  }
}

const proceduresService = new ProceduresService();
Object.freeze(proceduresService);

export default proceduresService;
