/**
 * Rule.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    from: {
      type: "string",
      required: true,
    },
    to: {
      type: "string",
      required: true,
    },
    regex: {
      type: "string",
      required: true,
    },
    lawyer: {
      model: "lawyer",
      required: true,
    },
  },
};
