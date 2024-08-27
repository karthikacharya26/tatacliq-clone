const jwt = require("jsonwebtoken");
require("dotenv").config();
const userAuthentication = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];

  if (token) {
    jwt.verify(token, process.env.userSecretKey, (err, decoded) => {
      if (decoded) {
        req.body.userID = decoded.userID;
        next();
      } else {
        res.status(403).send({ message: "User Authorization Error" });
      }
    });
  } else {
    res.status(403).send({ message: "Invalid Token" });
  }
};

module.exports = userAuthentication;
