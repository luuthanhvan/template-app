const Products = require("../models/Product");

class ProductController {
  async storeProduct(req, res) {
    // console.log("data:", req.body);
    try {
      const product = new Products(req.body);
      await product.save().then(() => {
        const responseObj = {
          message: "Store a product successfully!",
          status: 1, // success
        };
        return res.status(200).json(responseObj);
      });
    } catch (error) {
      const responseError = {
        message: "Store a product failed!",
        error: error,
        status: 0, // failed
      };
      return res.status(500).json(responseError);
    }
  }

  async getAllProducts(req, res) {
    try {
      await Products.find({}).then((products) => {
        const responseObj = {
          message: "Fetch all products successfully!",
          data: products,
          status: 1, // success
        };
        return res.status(200).json(responseObj);
      });
    } catch (error) {
      const responseError = {
        message: "Fetch all products failed!",
        error: error,
        status: 0, // failed
      };
      return res.status(500).json(responseError);
    }
  }

  async getProduct(req, res) {
    try {
      const productID = req.params.productID;

      await Products.find({ _id: productID }).then((product) => {
        const responseObj = {
          message: "Fetch a product successfully!",
          data: product,
          status: 1, // success
        };
        return res.status(200).json(responseObj);
      });
    } catch (error) {
      const responseError = {
        message: "Fetch a product failed!",
        error: error,
        status: 0, // failed
      };
      return res.status(500).json(responseError);
    }
  }

  async updateProduct(req, res) {
    try {
      const productID = req.params.productID;
      const newProduct = req.body;

      await Products.updateOne({ _id: productID }, newProduct).then(() => {
        const responseObj = {
          message: "Update a product successfully!",
          status: 1, // success
        };
        return res.status(200).json(responseObj);
      });
    } catch (error) {
      const responseError = {
        message: "Update a product failed!",
        error: error,
        status: 0, // failed
      };
      return res.status(500).json(responseError);
    }
  }

  async deleteProduct(req, res) {
    try {
      const productID = req.params.productID;

      await Products.deleteOne({ _id: productID }).then(() => {
        const responseObj = {
          message: "Delete a product successfully!",
          status: 1, // success
        };
        return res.status(200).json(responseObj);
      });
    } catch (error) {
      const responseError = {
        message: "Delete a product failed!",
        error: error,
        status: 0, // failed
      };
      return res.status(500).json(responseError);
    }
  }
}

module.exports = new ProductController();
