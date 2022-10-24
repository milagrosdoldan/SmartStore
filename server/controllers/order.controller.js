const OrderService = require("../service/order.service");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/User");

class OrderController {
  static async createOrder(req, res, next) {
    try {
      const { _id } = req.params;
      const user = await OrderService.createOrder(_id);
      user && res.status(200).send(user);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = OrderController;
