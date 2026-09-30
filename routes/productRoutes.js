const express = require("express");

const router = express.Router();

const productController = require("../controllers/productController");
const cacheMiddleware = require("../middleware/cacheMiddleware");

router.get(
    "/products",
    cacheMiddleware,
    productController.getProducts
);

router.get(
    "/products/:id",
    cacheMiddleware,
    productController.getProductById
);

router.post(
    "/products",
    cacheMiddleware,
    productController.createProduct
);

router.put(
    "/products/:id",
    cacheMiddleware,
    productController.updateProduct
);

router.patch(
    "/products/:id",
    cacheMiddleware,
    productController.patchProduct
);

router.delete(
    "/products/:id",
    cacheMiddleware,
    productController.deleteProduct
);

module.exports = router;