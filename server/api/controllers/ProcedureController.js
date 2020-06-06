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
};
