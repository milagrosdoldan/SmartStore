const Products = require("../models/Products");
const User = require("../models/User");
const Product = require("../models/Products");

class ProductService {
  static async createProduct(reqbody) {
    try {
      let product = new Product(reqbody);
      return await product.save({});
    } catch (error) {
      console.error("error existente en createProduct- SERVICE", error.message);
    }
  }

  /*   static async createCategory(reqbody) {
    try {
      let category = new Category(reqbody);
      return await category.save({});
    } catch (error) {
      console.error(
        "error existente en createCategory- SERVICE",
        error.message
      );
    }
  } */

  static async addReview(userId, reqbody) {
    try {
      const user = await User.findById(userId);

      return await Product.findByIdAndUpdate(
        reqbody._id, //Id del Producto
        {
          $addToSet: {
            reviews: {
              userId: user.username,
              commentReview: reqbody.commentReview,
            },
          },
        }
      );
    } catch (error) {
      console.error("error existente en addReview- SERVICE", error.message);
    }
  }
  static async getOneProductReviews(productId) {
    try {
      let resenias = await Product.findById(productId).select({
        reviews: 1,
      });
      return resenias;
    } catch (error) {
      console.error(
        "error existente en getOneProductReviews- SERVICE",
        error.message
      );
    }
  }

  static async getAllProduct() {
    try {
      let product = await Product.find();
      return product;
    } catch (error) {
      console.error("error existente en getAllProduct- SERVICE", error.message);
    }
  }

  static async getProductById(id) {
    try {
      let product = await Product.findById(id);
      return product;
    } catch (error) {
      console.error(
        "error existente en getProductById- SERVICE",
        error.message
      );
    }
  }
  static async getProductByName(name) {
    try {
      let product = await Product.find({ name: { $regex: name } });
      console.log(product, "producto");
      return product;
    } catch (error) {
      console.error(
        "error existente en getProductByName- SERVICE",
        error.message
      );
    }
  }
  static async getProductByCategory(category) {
    try {
      let product = await Product.find({ category: category });
      return product;
    } catch (error) {
      console.error(
        "error existente en getProductByCategory- SERVICE",
        error.message
      );
    }
  }

  /*   static async editProduct(id, reqbody) {
    try {
      return await Product.findByIdAndUpdate(
        id,
        {
          $set: {
            name: reqbody.name,
            description: reqbody.description,
            price: reqbody.price,
            category: reqbody.category,
            marca: reqbody.marca,
            cantidad: reqbody.cantidad,
          },
        },
        { new: true }
      );
    } catch (error) {
      console.error("error existente en editProduct- SERVICE", error.message);
    }
  } */

  /*   static async editCategory(id, reqbody) {
    try {
      return await Category.findByIdAndUpdate(
        id,
        {
          $set: {
            name: reqbody.name,
          },
        },
        { new: true }
      );
    } catch (error) {
      console.error("error existente en editCategory- SERVICE", error.message);
    }
  }
 */
  static async deleteProduct(id) {
    try {
      return await Product.findByIdAndDelete(id);
    } catch (error) {
      console.error("error existente en deleteProduct- SERVICE", error.message);
    }
  }
  /* 
  static async deleteCategory(id) {
    try {
      return await Category.findByIdAndDelete(id);
    } catch (error) {
      console.error(
        "error existente en deleteCategory- SERVICE",
        error.message
      );
    }
  } */
}

module.exports = ProductService;
