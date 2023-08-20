const express = require("exress");
const bodyParser = require("body-parser");
const routes = express.Router();

// import model objects
const { products } = require("../model");

// products router
// CREATE
routes.post(".products", bodyParser.json(), (req,res)=> {
    products.createProduct(req,res)
});

// READ 
routes.get("/products", (req, res) => {
    products.fetchProducts(req, res);
});
routes.get("/product/:id", (req,res) => {
    products.fetchProduct(req,res);
});

// UPDATE
routes.patch("/products/:id", bodyParser.json(), (req,res) => {
    products.updateProduct(req,res);
});

// DELETE
routes.delete("/products/:id", bodyParser.json(), (req, res) => {
    products.deleteProduct(req, res);
});

module.exports = {
    express,
    routes
};
