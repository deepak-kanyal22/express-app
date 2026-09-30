const fs = require("fs/promises");
const path = require("path");

const pathTOFile = path.join(__dirname, "..", "db.json");

async function readFile() {
    const data = await fs.readFile(pathTOFile, "utf-8");
    return JSON.parse(data);
}

async function writeFile(products) {
    await fs.writeFile(
        pathTOFile,
        JSON.stringify(products, null, 2)
    );
}

module.exports = {
    readFile,
    writeFile
};