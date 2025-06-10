// routes/Dashboard.routes.js
const express = require('express');
const DashboardController = require('../controllers/Dashboard.Controller');
const router = express.Router();

router.get('/', DashboardController.index);

module.exports = router;