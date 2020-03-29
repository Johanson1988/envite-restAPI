const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
    name: {type:String, required:true},
    //qrCode: {type:String},
    teamA: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Player'}],
    teamB: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Player'}],
    winners: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Player'}],
    loosers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Player'}],
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Player', required: true},
    gamesToWin: { type: Number, required: true},
    gameStatus: { type:String, enum:['waitingForPlayers','Running','Finished'], required:true},
    chatLog: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ChatMessage'}],
    scoreTeamA: [{ type: Number, required: true}],
    scoreTeamB: [{ type: Number, required: true}],
    chicos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Chico'}],
  }, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    },
  });
  
  const Game = mongoose.model('Game', gameSchema);
  
  module.exports = Game;