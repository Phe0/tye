/**
 * ProgressController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  getByProcedure: function (req, res) {
    Progress.find({ procedure: req.params.id })
      .then((progresses) => {
        return res.status(200).json(progresses);
      })
      .catch((error) => {
        return res.status(400).json(error);
      });
  },
};
