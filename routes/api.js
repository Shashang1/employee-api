var express = require('express');
var router = express.Router();
const userDataServices = require('../data-services/user');

router.get('/getEmployees', async function (req, res, next) {
  const employees = await userDataServices.getEmployees();
  res.status(200).json({ employees });
});

module.exports = router;
