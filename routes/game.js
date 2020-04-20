const express = require('express');
const router = express.Router();

// HELPER FUNCTIONS
const { isLoggedIn } = require('./../helpers/middleware');

router.post('/', isLoggedIn, (req, res, next) => {
    const Game = require('./../models/Game');
    const { roundTime, numberOfPlayers } = req.body;
    const createdBy = req.session.currentUser._id;
    const gameStatus = 'waitingForPlayers';

    Game.create({roundTime, numberOfPlayers, createdBy, gameStatus})
        .then( newGame => {
            res.status(201).json(newGame);
        })
        .catch(err => res.status(422).send());
});

router.get('/', isLoggedIn, (req, res, next) => {
    const Game = require('./../models/Game');
    const { _id } = req.query;

    Game.findOne({_id})
        .then(gameFound => {
            if (!gameFound) throw Error;
            else res.status(202).json(gameFound)
        })
        .catch(err => res.status(404).send())
});

module.exports = router;