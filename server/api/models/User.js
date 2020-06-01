/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    cpf: {
      type: "string",
      required: true,
      unique: true,
      regex: /[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}/,
    },
    password: {
      type: "string",
      required: true,
      encrypt: true,
    },
  },
  customToJSON: function () {
    return _.omit(this, ["password"]);
  },
};
