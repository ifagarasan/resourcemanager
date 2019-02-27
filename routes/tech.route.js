const express = require('express');
const router = express.Router();

const tech_controller = require('../controllers/tech.controller');

router.get('/test', tech_controller.test);

router.post('/create', tech_controller.create);

router.get('/', tech_controller.all);

module.exports = router;