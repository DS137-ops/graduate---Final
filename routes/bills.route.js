const billscontroller = require('../controller/bills.controller')

const GuardAuth = require('../routes/guardAuth')

const router = require('express').Router()

router.get('/', GuardAuth.isAuth, billscontroller.getbillspage)

module.exports = router;
