const express = require('express');
const router = express.Router();

router.post('/', (req, res, next) => {
    const Game = require('./../models/Game');
    const { roundtime, numberOfPlayers } = req.body;
    const createdBy = req.session.currentUser._id;
    const gameStatus = 'waitingForPlayers';
    console.log(roundtime, numberOfPlayers, createdBy, gameStatus);
    Game.create({roundtime, numberOfPlayers, createdBy, gameStatus})
        .then( newGame => {
            console.log('escrbiendo BBDD')
            const { _id } = newGame;
            res.status(201).json(_id);
        })
        .catch(err => res.status(422).send());
});

module.exports = router;