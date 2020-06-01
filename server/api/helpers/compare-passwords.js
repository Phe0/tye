module.exports = {
  friendlyName: "Compare passwords",

  description: "Function used to compare hashed passwords",

  inputs: {
    password: {
      type: "string",
      required: true,
    },
    passwordToCompare: {
      type: "string",
      required: true,
    },
  },

  exits: {
    success: {
      description: "All done.",
    },
  },

  fn: async function (inputs, exits) {
    const isMatch = await bcrypt.compare(
      inputs.password,
      inputs.passwordToCompare
    );
    return exits.success(isMatch);
  },
};
