const express = require('express');
const { createUser, loginUser, getSchemeId, getLoanId, getSchemes, getLoans , updateUser , deleteUser , getwallet} = require('../controllers/userController');

const router = express.Router();

router.post('/create', createUser);
router.post('/login', loginUser);
router.get('/schemeId', getSchemeId);
router.get('/loanId', getLoanId);
router.get('/getScheme', getSchemes);
router.get('/getLoan', getLoans);
router.put('/update', updateUser);
router.delete('/delete',deleteUser);
router.get('/wallet', getwallet);



module.exports = router;