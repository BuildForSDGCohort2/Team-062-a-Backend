const mongoose = require("mongoose");
const { userMethods, userStatics } = require("../Service/user");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

UserSchema.statics = userStatics;
UserSchema.methods = userMethods;

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
