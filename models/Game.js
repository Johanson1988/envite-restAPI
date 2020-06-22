const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({    
    teamA: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    teamB: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    winners: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    loosers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    gamesToWin: { type: Number},
    gameStatus: { type:String, enum:['waitingForPlayers', 'Ready','Running','Finished' ], required: true},
    chatLog: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ChatMessage' }],
    scoreTeamA: [{ type: Number }],
    scoreTeamB: [{ type: Number }],
    chicos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Chico' }],
    numberOfPlayers: { type: Number, enum: [4, 6, 8, 10], required: true },
    roundTime: { type: String, enum: ['30', '60', '90', '180', 'no-limit' ]},
    table: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
  }, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    },
  });
  
  const Game = mongoose.model('Game', gameSchema);
  
  module.exports = Game;