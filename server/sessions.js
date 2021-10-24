const express = require('express');
const SpotifyWebApi = require('spotify-web-api-node');
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

const addTo_session = (req, res) => {
  const playlistID = req.playlistId;
  const trackURI = req.trackURI;

  spotifyApi.addTracksToPlaylist(playlistID,[trackURI]);

}

const removeFrom_session = (req, res) => {
  const playlistID = req.playlistId;
  const playPosition = req.playPosition;
  const snapshotId = req.snapshotId;

  spotifyApi.removeTracksFromPlaylistByPosition(playlistID,[]), snapshotID);
}


const reorder_session = (req, res) => {
  const playlistID = req.playlistId;
  const playPosition = req.playPosition;
}

// ROUTING

router.get('/new', new_session);
router.get('/kill', kill_session);
router.get('/add', addTo_session);
router.get('/remove', removeFrom_session);
router.get('/reorder', reorder_session);
module.exports = {router, new_session, kill_session, update_session};