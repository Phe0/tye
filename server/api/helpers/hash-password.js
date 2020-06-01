const bcrypt = require("bcrypt");

module.exports = {
  friendlyName: "Hash password",

  description: "Function used to hash passwords",

  inputs: {
    password: {
      type: "string",
      required: true,
      description: "The password to be hashed",
    },
  },

  exits: {
    success: {
      description: "All done.",
    },
  },

  fn: async function (inputs, exits) {
    const hashed = await bcrypt.hash(inputs.password, 8);
    return exits.success(hashed);
  },
};
