require("dotenv").config();
const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.cookies.token;

  const payload = jwt.verify(token, process.env.SECRET);

  !payload && res.status(401).json({ status: "Fallo descripcion del token" });
  req.user = payload;
  res.send(req.user);
};
const verifyTokenAdmin = (req, res, next) => {
  const token = req.cookies.token;
  const payload = jwt.verify(token, process.env.SECRET);
  req.user = payload;
  console.log(req.user, "req user");

  if (req.user.isAdmin) {
    next();
  } else {
    res.sendStatus(401);
  }
};

module.exports = { verifyToken, verifyTokenAdmin };
