const express = require('express');
const router = express.Router();
const {generateRandomString} = require('./helpers');


// SESSION HANDLING

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

const kill_session = (req, res) => {
}

const update_session = (req, res) => {
  var playlistID = req.playlistId;
  var playPosition = req.playPosition;
}

// ROUTING

router.get('/new', new_session);
router.get('/kill', kill_session);
router.get('/update', update_session);

module.exports = {router, new_session, kill_session, update_session};