const bcrypt = require("bcryptjs");
const config = require("../../Config/env");
const jwt = require("jsonwebtoken");

exports.userStatics = {
  hashPassword: function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync());
  },

  findByEmail: async function (email) {
    const user = await this.findOne({ email });
    return user;
  },
};

exports.userMethods = {
  compareHash: function (password) {
    return bcrypt.compareSync(password, this.password);
  },

  authJSON: function () {
    return {
      email: this.email,
      fullName: this.fullName,
      token: this.genToken(),
    };
  },

  genToken: function () {
    const secret = config.jwtSecret;
    return jwt.sign(
      {
        fullName: this.fullName,
        email: this.email,
      },
      secret
    );
  },
};
