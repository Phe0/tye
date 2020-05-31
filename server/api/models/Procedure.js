/**
 * Procedure.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    number: {
      type: "string",
      required: true,
      regex: /[0-9]{20}/,
    },
    cpf: {
      type: "string",
      required: true,
      regex: /[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}/,
    },
  },
};
