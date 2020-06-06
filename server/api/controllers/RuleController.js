/**
 * RuleController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  getByLawyer: function (req, res) {
    Rule.find({ lawyer: req.params.id })
      .then((rules) => {
        return res.status(200).json(rules);
      })
      .catch((error) => {
        return res.status(400).json(error);
      });
  },
  find: function (req, res) {
    Rule.find({ lawyer: req.user.id })
      .then((rules) => {
        return res.status(200).json(rules);
      })
      .catch((error) => {
        return res.status(400).json(error);
      });
  },
};
