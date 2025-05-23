const express = require('express');

const { createWallet, getBalance, addMoney, withdrawMoney } = require('../controllers/walletController');
const router = express.Router();

router.post('/add', addMoney);
router.get('/get', getBalance);
router.post('/withdraw', withdrawMoney);


module.exports = router;