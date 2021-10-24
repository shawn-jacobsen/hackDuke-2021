const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController');
import generateRandomString from './helpers'

// SESSION HANDLING


// ROUTING

router.put('/new', new_session);
const new_session = (req, res) => {
  result = "/session/" + generateRandomString(15);
  res.send(JSON.stringify(result))
};

module.exports = router;