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
  "POST /api/user/login": "UserController.login",
  "POST /api/lawyer/login": "LawyerController.login",
  "POST /api/user/signin": "UserController.signin",
  "POST /api/lawyer/signin": "LawyerController.signin",
};
