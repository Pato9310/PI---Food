const express = require('express');
const { getDiets } = require('../controllers/Diet');
const router = express.Router();

router.get('/', getDiets);

module.exports = router;