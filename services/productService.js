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

async function createProduct(product) {
    const products = await database.readFile();

    products.push(product);

    await database.writeFile(products);

    return product;
}

async function updateProduct(id, updatedData) {
    const products = await database.readFile();

    const index = products.findIndex(
        (item) => item.id === Number(id)
    );

    if (index === -1) {
        return null;
    }

    products[index] = {
        ...products[index],
        ...updatedData
    };

    await database.writeFile(products);

    return products[index];
}

async function patchProduct(id, updatedData) {
    return await updateProduct(id, updatedData);
}

async function deleteProduct(id) {
    const products = await database.readFile();

    const index = products.findIndex(
        (item) => item.id === Number(id)
    );

    if (index === -1) {
        return null;
    }

    const deletedProduct = products.splice(index, 1)[0];

    await database.writeFile(products);

    return deletedProduct;
}

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    patchProduct,
    deleteProduct
};

