const ProductService = require("../service/product.service");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

class ProductController {
  static async createProduct(req, res, next) {
    try {
      const product = await ProductService.createProduct(req.body);
      res.status(201).send(product);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  static async createCategory(req, res, next) {
    try {
      const category = await ProductService.createCategory(req.body);
      res.status(201).send(category);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  static async getAllProduct(req, res, next) {
    try {
      const products = await ProductService.getAllProduct();
      products && res.status(200).send(products);
      products || res.sendStatus(500);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  static async getProductById(req, res, next) {
    try {
      const { _id } = req.params;
      const product = await ProductService.getProductById(_id);
      product && res.status(200).send(product);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  static async getProductByName(req, res, next) {
    try {
      const { name } = req.params;
      const product = await ProductService.getProductByName(name);
      product && res.status(200).send(product);
      product || res.sendStatus(500);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  static async getProductByCategory(req, res, next) {
    try {
      const { category } = req.params;
      const product = await ProductService.getProductByCategory(category);
      product && res.status(202).send(product);
      product || res.sendStatus(500);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  static async editProduct(req, res, next) {
    try {
      const { _id } = req.params;
      const productUpdated = await ProductService.editProduct(_id, req.body);
      productUpdated && res.status(202).send(productUpdated);
      productUpdated || res.sendStatus(500);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  static async editCategory(req, res, next) {
    try {
      const { _id } = req.params;
      const categoryUpdated = await ProductService.editCategory(_id, req.body);
      categoryUpdated && res.status(202).send(categoryUpdated);
      categoryUpdated || res.sendStatus(500);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  static async deleteProduct(req, res, next) {
    try {
      const { _id } = req.params;
      const productUpdated = await ProductService.deleteProduct(_id);
      productUpdated && res.status(204).send("Producto Eliminado!");
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  static async deleteCategory(req, res, next) {
    try {
      const { _id } = req.params;
      console.log(_id);
      const categoryUpdated = await ProductService.deleteCategory(_id);
      categoryUpdated && res.status(204).send("Categoria Eliminada!");
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
  static async addReview(req, res, next) {
    try {
      const { _id } = req.params; //Id del Usuario que realizó la compra
      const productReview = await ProductService.addReview(_id, req.body);
      console.log(productReview);
      productReview && res.status(202).send(productReview);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  static async getOneProductReviews(req, res, next) {
    try {
      const { _id } = req.params;

      const reviews = await ProductService.getOneProductReviews(_id);
      reviews && res.status(200).send(reviews);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
}

module.exports = ProductController;
