const express = require('express');
const carsRoute = require('./api/cars_route');
const server = express();

server.use(express.json());

server.use('/cars', carsRoute);

module.exports = server;