// ---------- CONTROLLER ---------- //

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const route = express.Router();
const { User, Product } = require("../model");

// User Instance

const user = new User();

// Product Instance

const product = new Product();

// GET Used Goods

route.get("^/$|/used_goods", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../view/index.html"));
});

// ----------- USER LOGIN ---------- //

// To login

route.post("/login", bodyParser.json(), (req, res) => {
  user.login(req, res);
});

// To retrieve all users

route.get("/users", (req, res) => {
  user.fetchUsers(req, res);
});

// To retrieve a single user

route.get("/users/:id", (req, res) => {
  user.fetchUser(req, res);
});

// To update

route.put("/users/:id", bodyParser.json(), (req, res) => {
  user.updateUser(req, res);
});

// To register

route.post("/register", bodyParser.json(), (req, res) => {
  user.createUser(req, res);
});

// To delete

route.delete("/users/:id", (req, res) => {
  user.deleteUser(req, res);
});

// ---------- PRODUCTS ---------- //

// To fetch all products

route.get("/products", (req, res) => {
  product.fetchProducts(req, res);
});

// To fetch a single product

route.get("/products/:id", (req, res) => {
  product.fetchProduct(req, res);
});

// To add a new product

route.post("/products", bodyParser.json(), (req, res) => {
  product.addProduct(req, res);
});

// To update a product

route.put("/products/:id", bodyParser.json(), (req, res) => {
  product.updateProduct(req, res);
});

// To delete a product

route.delete("/products/:id", (req, res) => {
  product.deleteProduct(req, res);
});

module.exports = route;