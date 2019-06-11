// vendors
const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => res.json({ msg: 'testing basic routes' }));

module.exports = routes;
