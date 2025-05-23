const express = require('express');
const { applyLoan, updateLoan, approveLoan , loanStatus} = require('../controllers/loanController');
const router = express.Router();

router.post('/apply', applyLoan);
router.put('/update', updateLoan);
router.put('/approve', approveLoan);
router.get('/get', loanStatus);
module.exports = router;