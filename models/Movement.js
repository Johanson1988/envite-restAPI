const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movementSchema = new Schema({
    gameRef: {type: mongoose.Schema.Types.ObjectId, ref: 'Game', required: true},
    playerRef: {type: mongoose.Schema.Types.ObjectId, ref: 'Game', required: true},
    isCaptain: {type:Boolean, required: true},
    movementType: {type:String, enum:['envidar', 'siete', 'nueve', 'chico-fuera', 'querer', 'jugar-callado','no-querer'], required: true},
    staus: {type:String, enum:['normal', 'envido', 'siete', 'nueve', 'chico-fuera']},
    playedBy: {type: mongoose.Schema.Types.ObjectId, ref: 'Player', required: true},
    cardPlayed: {type: mongoose.Schema.Types.ObjectId, ref: 'Card', required: true},
    position: {type: Number, enum:[1,2,3,4,5,6,7,8,9,10], required: true},
    stonesTeamA: {type: Number, required: true},
    stonesTeamB: {type: Number, required: true},
    playerTeam: {type: String, enum:['team-a', 'team-b']},
    ronda: {type:Number, enum:[1,2,3]},
    gameScoreTeamA: {type: Number, required: true},
    gameScoreTeamB: {type: Number, required: true},
    pointsToWin: {type: Number, required: true}
  }, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    },
  });
  
  const Movement = mongoose.model('Movement', movementSchema);
  
  module.exports = Movement;