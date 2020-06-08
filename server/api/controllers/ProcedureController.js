/**
 * ProcedureController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  getLawyer: function (req, res) {
    Procedure.findOne({ id: req.params.id })
      .then((procedure) => {
        return res.status(200).json({ lawyer: procedure.lawyer });
      })
      .catch((error) => {
        return res.status(400).json(error);
      });
  },

  find: function (req, res) {
    let searchObject;
    if (req.user.email) {
      searchObject = { lawyer: req.user.id };
    } else {
      searchObject = { cpf: req.user.cpf };
    }
    Procedure.find(searchObject)
      .then((procedures) => {
        return res.status(200).json(procedures);
      })
      .catch((error) => {
        return res.status(400).json(error);
      });
  },
};
