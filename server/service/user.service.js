const User = require("../models/User");
class Userervice {
  static async createUser(reqbody) {
    try {
      let user = new User(reqbody);
      return await user.save({ salt: 0 });
    } catch (error) {
      console.error("error existente en createUser- SERVICE", error.message);
    }
  }
  static async getAllUser(reqbody) {
    try {
      let user = await User.find({ Usertatus: true }, { password: 0, salt: 0 });
      return user;
    } catch (error) {
      console.error("error existente en getAllUser- SERVICE", error.message);
    }
  }
  static async addProduct(id, ordenes) {
    try {
      return await User.findByIdAndUpdate(
        id,
        {
          $push: {
            ordenes: ordenes,
          },
        },
        { new: true }
      );
    } catch (error) {
      console.error("error existente en addProduct- SERVICE", error.message);
    }
  }

  static async addToCart(id, carrito) {
    try {
      const user = await User.find({
        _id: id,
        "carrito.name": carrito.name,
      });

      if (user.length > 0) {
        return User.findOneAndUpdate(
          { _id: id, "carrito.name": carrito.name },
          { $inc: { "carrito.$.amount": 1 } },
          { new: true }
        );
      } else {
        const user = await User.findByIdAndUpdate(
          id,
          {
            $addToSet: {
              carrito,
            },
          },
          { new: true }
        );
        return user;
      }
    } catch (error) {
      console.error("error existente en addToCart- SERVICE", error.message);
    }
  }
  static async deleteCart(_id, carrito) {
    try {
      const user = await User.find({
        _id: _id,
        "carrito.name": carrito.name,
      });

      if (user.length > 0) {
        if (carrito.amount < 1) {
          console.log("entre", carrito);
          return User.findOneAndUpdate(
            { _id: _id, "carrito.name": carrito.name },
            { $set: { "carrito.$.amount": 1 } },
            { new: true }
          );
        } else {
          return User.findOneAndUpdate(
            { _id: _id, "carrito.name": carrito.name },
            { $inc: { "carrito.$.amount": -1 } },
            { new: true }
          );
        }
      }
    } catch (error) {
      console.error({ error });
    }
  }
  static async realDelete(_id, carrito) {
    try {
      return await User.findByIdAndUpdate(
        _id,
        {
          $pull: {
            carrito: carrito,
          },
        },
        { new: true }
      );
    } catch (error) {
      console.error({ error });
    }
  }
  static async deleteUser(id) {
    try {
      return await User.findByIdAndUpdate(
        id,
        { Usertatus: false },
        { new: true }
      );
    } catch (error) {
      console.error("error existente en deleteUser- SERVICE", error.message);
    }
  }
  static async addFav(id, favoritos) {
    try {
      return await User.findByIdAndUpdate(
        id,
        {
          $addToSet: {
            favoritos,
          },
        },
        { new: true }
      );
    } catch (error) {
      console.error("error existente en addFav- SERVICE", error.message);
    }
  }
  static async deleteFav(_id, favorites) {
    try {
      const user = await User.findByIdAndUpdate(
        _id,
        {
          $pull: {
            favorites: { id: favorites.id },
          },
        },
        { new: true }
      );
      return user;
    } catch (error) {
      console.error({ error });
    }
  }
  static async addAdmin(id) {
    try {
      return await User.findByIdAndUpdate(
        id,
        {
          $set: {
            isAdmin: true,
          },
        },
        { new: true }
      );
    } catch (error) {
      console.error("error existente en addAdmin- SERVICE", error.message);
    }
  }
  static async deleteAdmin(id) {
    try {
      return await User.findByIdAndUpdate(
        id,
        {
          $set: {
            isAdmin: false,
          },
        },
        { new: true }
      );
    } catch (error) {
      console.error("error existente en deleteAdmin- SERVICE", error.message);
    }
  }
  static async editUser(id, body) {
    try {
      return await User.findByIdAndUpdate(
        id,
        {
          $set: {
            body,
          },
        },
        { new: true }
      );
    } catch (error) {
      console.error("error existente en deleteAdmin- SERVICE", error.message);
    }
  }
}

module.exports = Userervice;
