const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController');
import generateRandomString from './helpers'

// SESSION HANDLING

sessions = []

// ROUTING

app.get('/update', update_session);

app.get('/kill', kill_session);

router.put('/new', new_session);

const update_session = (req, res) => {
  var playlistID = req.playlistId;
  var playPosition = req.playPosition;
}

const kill_session = (req, res) => {
}

const new_session = (req, res) => {
  const sessionId = generateRandomString(15);
  result = "/session/" + sessionId;
  const session = {
    id: sessionId,
    queue: []
  }
  sessions.push(session)
  res.send(JSON.stringify(result))
};

module.exports = router;