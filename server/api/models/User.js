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
    },
  },
  customToJSON: function () {
    return _.omit(this, ["password"]);
  },
  beforeCreate: function (valuesToSet, proced) {
    sails.helpers
      .hashPassword(valuesToSet.password)
      .then((response) => {
        valuesToSet.password = response;
        return proced();
      })
      .catch((error) => proced(error));
  },
};
