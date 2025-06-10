// routes/Salas.routes.js
const express = require('express');
const multer = require('multer');
const SalasController = require('../controllers/Salas.Controller');
const router = express.Router();

const uploadConfig = require("../config/upload");
const upload = multer(uploadConfig);

router.post('/', upload.single("thumbnail"), SalasController.store);

module.exports = router;