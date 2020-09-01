const { User } = require("../Database");
const jwt = require("jsonwebtoken");
const config = require("../Config/env");

const getToken = (req) => {
  let {
    headers: { authorization },
  } = req;
  if (typeof authorization === "undefined") {
    authorization = "";
  }
  if ((authorization && authorization.split(" ") === "Bearer") || "Token") {
    return authorization.split(" ")[1];
  }
  return null;
};

const auth = async (req, res, next) => {
  const token = getToken(req);
  try {
    const decoded = jwt.verify(token, config.jwtSecret);
    const user = await User.findByEmail(decoded.email);
    if (!user) throw Error("User Doesnt't Exist");
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = auth;
