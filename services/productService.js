const database = require("../database/database");

async function getProducts() {
    return await database.readFile();
}

async function getProductById(id) {
    const products = await database.readFile();

    return products.find(
        (item) => item.id === Number(id)
    );
}

module.exports = {
    getProducts,
    getProductById
};

