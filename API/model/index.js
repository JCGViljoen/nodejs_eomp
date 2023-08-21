// imports
const Users = require("./users");
const Products = require("./products");

module.exports = {
    users: new Users(),
    products: new Products()
}

