/**
 * Rule.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    original: {
      type: "string",
      required: true,
    },
    literal: {
      type: "string",
      required: true,
    },
    regex: {
      type: "string",
      required: true,
    },
  },
};
