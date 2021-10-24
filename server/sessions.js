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
  const playlistId = req.body.playlistId;
  const trackURI = req.body.trackURI;

  spotifyApi.addTracksToPlaylist(playlistId,[trackURI]);

}

const removeFrom_session = (req, res) => {
  const playlistId = req.body.playlistId;
  const trackPos = req.body.trackPos;
  const snapshotId = req.body.snapshotId;

  spotifyApi.removeTracksFromPlaylistByPosition(playlistId,[trackPos], snapshotId);
}


const reorder_session = (req, res) => {
  const playlistId = req.body.playlistId;
  const trackPos = req.body.trackPos;
  const newTrackPos = req.body.newTrackPos;

  spotifyApi.reorderTracksInPlaylist(playlistId, trackPos, newTrackPos);
}

const get_session = (req, res) => {
  result = {queue: [
    {id: "1", name: "Song 1", rating: 21},
    {id: "2", name: "Song 2", rating: 1431},
    {id: "3", name: "Song 3", rating: 7651},
    {id: "4", name: "Song 4", rating: 4351},
    {id: "5", name: "Song 5", rating: 13241},
  ]}
  res.send(JSON.stringify(result))
}

// ROUTING

router.get('/new', new_session);
router.get('/kill', kill_session);
router.get('/current', get_session);
router.get('/add', addTo_session);
router.get('/remove', removeFrom_session);
router.get('/reorder', reorder_session);

module.exports = {router, new_session, kill_session, update_session, addTo_session, removeFrom_session, reorder_session};
