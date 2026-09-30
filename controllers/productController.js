const productService = require("../services/productService");

async function getProducts(req, res) {
    try {
        const products = await productService.getProducts();

        res.json(products);
    } catch (err) {
        console.log(err);

        res.status(500).json({
            message: "Internal server error"
        });
    }
}

async function getProductById(req, res) {
    try {
        const product = await productService.getProductById(
            req.params.id
        );

        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        res.json(product);
    } catch (err) {
        console.log(err);

        res.status(500).json({
            message: "Internal server error"
        });
    }
}

async function createProduct(req, res) {
    try {
        const product = await productService.createProduct(
            req.body
        );

        res.status(201).json(product);
    } catch (err) {
        console.log(err);

        res.status(500).json({
            message: "Internal server error"
        });
    }
}

async function updateProduct(req, res) {
    try {
        const product = await productService.updateProduct(
            req.params.id,
            req.body
        );

        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        res.json(product);
    } catch (err) {
        console.log(err);

        res.status(500).json({
            message: "Internal server error"
        });
    }
}

async function patchProduct(req, res) {
    try {
        const product = await productService.patchProduct(
            req.params.id,
            req.body
        );

        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        res.json(product);
    } catch (err) {
        console.log(err);

        res.status(500).json({
            message: "Internal server error"
        });
    }
}

async function deleteProduct(req, res) {
    try {
        const product = await productService.deleteProduct(
            req.params.id
        );

        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        res.json(product);
    } catch (err) {
        console.log(err);

        res.status(500).json({
            message: "Internal server error"
        });
    }
}

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    patchProduct,
    deleteProduct
};