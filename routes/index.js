// routes/index.js
const express = require('express');
const sessaoRoutes  = require('./Sessao.routes');
const dashboardRoutes = require('./Dashboard.routes');
const salasRoutes = require('./Salas.routes');

const router = express.Router();

// prefixo de URL   →   módulo de rotas
router.use('/sessao',  sessaoRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/salas', salasRoutes);

module.exports = router;