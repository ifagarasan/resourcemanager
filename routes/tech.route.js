const express = require('express');
const router = express.Router();

const tech_controller = require('../controllers/tech.controller');


router.get('/test', tech_controller.test);

module.exports = router;