// Autheticate user

const { sign, verify } = require("jsonwebtoken");
require("dotenv").config();
function createToken(user) {
  return sign(
    {
      emailAdd: user.emailAdd,
      userPass: user.userPass,
    },
    process.env.SECRET_KEY,
    {
      expiresIn: "1h",
    }
  );
}
function verifyAToken(req, res, next) {
  try {
    console.log("Get token from req.headers['authorization']");
    const token = req.headers["authorization"];
    console.log(token);
    next();
  } catch (e) {
    res.json({
      status: res.statusCode,
      msg: e.message,
    });
  }
}
module.exports = {
  createToken,
  verifyAToken,
};
