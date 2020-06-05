import api from "./Api";

class ProceduresService {
  async getProcedures() {
    const procedures = await api.get("/procedure");
    return procedures.data;
  }

  async newProcedure(procedure) {
    const response = await api.post("/procedure", procedure);
    return response;
  }

  async getLawyer(id) {
    const response = await api.get(`/procedure/getLawyer/${id}`);
    return response.data;
  }
}

const proceduresService = new ProceduresService();
Object.freeze(proceduresService);

export default proceduresService;
