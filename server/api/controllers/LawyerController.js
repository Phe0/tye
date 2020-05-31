/**
 * LawyerController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  hello: function (req, res) {
    let myName = "Pedro";
    return res.send("Hello " + myName);
  },
};
