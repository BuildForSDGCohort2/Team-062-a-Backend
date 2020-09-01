const { User } = require("../Database");
const { authenticationError, requestError } = require("../Utils/errorResponse");

exports.registerController = async (req, res, next) => {
  const { email, fullName, password } = req.body;
  try {
    if (!email || !fullName || !password)
      throw requestError("Please input all details");
    const user = await User.findByEmail(email);
    if (user) throw requestError("User with this email already exist");
    const newUser = new User();
    newUser.email = email;
    newUser.fullName = fullName;
    newUser.password = User.hashPassword(password);
    await newUser.save();
    const userJson = newUser.authJSON();
    res.status(201).json({
      success: true,
      user: userJson,
    });
  } catch (error) {
    next(error);
  }
};

exports.loginController = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) throw requestError("Please input all details");
    const user = await User.findByEmail(email);
    if (!user) throw authenticationError("This user doesn't exist");
    const isMatch = user.compareHash(password);
    if (!isMatch) throw authenticationError("Password Incorrect");
    const userJson = user.authJSON();
    res.json({
      success: true,
      user: userJson,
    });
  } catch (error) {
    next(error);
  }
};
