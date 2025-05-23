const express = require('express');
const { createScheme, updateScheme, approveScheme } = require('../controllers/schemeController');
const router = express.Router();

router.post('/create', createScheme);
router.put('/update', updateScheme);
router.put('/approve', approveScheme);

module.exports = router;