const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
    name: {type:String, required:true},
    //qrCode: {type:String},
    movementsList: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movements'}],
    players: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Player'}],
    winners: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Player'}],
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Player', required: true},
    scoreboard: [],
    gameStatus: { type:String, enum:['waitingForPlayers','Running','Finished'], required:true}
  }, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    },
  });
  
  const Game = mongoose.model('Game', gameSchema);
  
  module.exports = Game;