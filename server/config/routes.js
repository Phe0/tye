/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  "POST /user/login": "UserController.login",
  "POST /lawyer/login": "LawyerController.login",
  "POST /user/signin": "UserController.signin",
  "POST /lawyer/signin": "LawyerController.signin",
  "GET /progress/getByProcedure/:id": "ProgressController.getByProcedure",
  "GET /rule/getByLawyer/:id": "RuleController.getByLawyer",
  "GET /procedure/getLawyer/:id": "ProcedureController.getLawyer",
};
