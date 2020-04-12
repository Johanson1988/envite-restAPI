const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({    
    teamA: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Player'}],
    teamB: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Player'}],
    winners: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Player'}],
    loosers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Player'}],
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Player', required: true},
    gamesToWin: { type: Number},
    gameStatus: { type:String, enum:['waitingForPlayers','Running','Finished'], required: true},
    chatLog: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ChatMessage'}],
    scoreTeamA: [{ type: Number}],
    scoreTeamB: [{ type: Number}],
    chicos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Chico'}],
    numberOfPlayers: { type: Number, enum: [4, 6, 8, 10], required: true },
    roundTime: { type: String, enum: ['30s', '60s', '90s', '180s', 'no-limit'], rquired: true}
  }, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    },
  });
  
  const Game = mongoose.model('Game', gameSchema);
  
  module.exports = Game;