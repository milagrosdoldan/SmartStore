const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user.controller");
const { verifyTokenAdmin } = require("../middelware/auth.middelware");
//GET
router.get("/:_id", UserController.findOneUser);

//POST
router.post("/ordenes/:_id", UserController.addProduct);
router.post("/favoritos/:_id", UserController.addFav);
router.post("/carrito/:_id", UserController.addToCart);

// --- DEBERIA SER DE ADMIN
//GET
router.get("/", verifyTokenAdmin, UserController.getAllUser);

//PUT
router.put("/deleteFav/:_id", UserController.deleteFav);
router.put("/deletecarrito/:_id", UserController.deleteCart);
router.put("/deleteProduct/:_id", UserController.realDelete);
router.put("/:_id", verifyTokenAdmin, UserController.deleteUser);
router.put("/admin/:_id", verifyTokenAdmin, UserController.addAdmin);
router.put("/dadmin/:_id", verifyTokenAdmin, UserController.deleteAdmin);
module.exports = router;
