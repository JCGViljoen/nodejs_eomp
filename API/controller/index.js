const express = require("express");
const bodyParser = require("body-parser");
const routes = express.Router();

// import model objects
const { products } = require("../model");

// products router
// CREATE
routes.post("/product", bodyParser.json(), (req,res)=> {
    products.registerProduct(req,res);
});

// READ 
routes.get("/products", (req, res) => {
    products.fetchProducts(req, res);
});
routes.get("/product/:id", (req,res) => {
    products.fetchProduct(req,res);
});

// UPDATE
routes.patch("/product/:id", bodyParser.json(), (req,res) => {
    products.updateProduct(req,res);
});

// DELETE
routes.delete("/product/:id", bodyParser.json(), (req, res) => {
    products.deleteProduct(req, res);
});

const { users } = require("../model");
// user routes
// READ
routes.get("/users", (req,res)=>{
    users.fetchUsers(req,res);
});
routes.get("/user/id", (req,res) => {
    users.fetchUser (req,res);
});

// CREATE
routes.post("/register", bodyParser.json(), (req,res)=> {
    users.register(req,res);
})


//UPDATE
routes.patch("/user/:id", bodyParser.json(), (req,res)=>{
    users.updateUser(req,res);
});

// DELETE
routes.delete("/user/:id", bodyParser.json(), (req,res)=>{
    users.deleteUser(req,res)
});


module.exports = {
    express,
    routes
};
