const UserService = require("../service/user.service");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const bcrypt = require("bcrypt");
class AuthController {
  static async register(req, res, next) {
    try {
      const user = await UserService.createUser(req.body);
      if (user) {
        const token = jwt.sign(
          {
            username: user.username,
            email: user.email,
            _id: user._id,
            favoritos: user.favoritos,
            tel: user.tel,
            isAdmin: user.isAdmin,
            provincia: user.provincia,
            direccion: user.direccion,
            ordenes: user.ordenes,
            carrito: user.carrito,
          },
          process.env.SECRET,
          { expiresIn: "5d" }
        );

        const payload = jwt.verify(token, process.env.SECRET);
        req.user = payload;

        res.cookie("token", token, { maxAge: 999999 });
        res.status(201).send(req.user);
      }
      user || res.sendStatus(500);
    } catch (error) {
      console.log(error);
      next();
    }
  }
  static async signIn(req, res) {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.sendStatus(401);
    const {
      _id,
      username,

      email,
      password,
      salt,
      favoritos,
      carrito,
      isAdmin,
      tel,
      direccion,
    } = user;
    const passwordHash = bcrypt.hashSync(req.body.password, salt);
    if (passwordHash !== password) return res.sendStatus(401);
    if (passwordHash === password) {
      const token = jwt.sign(
        {
          username,
          _id,
          tel,
          direccion,

          email,
          favoritos,
          carrito,
          isAdmin,
        },
        process.env.SECRET,
        {
          expiresIn: "5d",
        }
      );
      const payload = jwt.verify(token, process.env.SECRET);
      req.user = payload;
      res.cookie("token", token, { maxAge: 999999 });
      res.status(201).send(req.user);
    }
  }
  static async logOut(req, res) {
    res.clearCookie("token");
    res.sendStatus(204);
  }
}

module.exports = AuthController;
