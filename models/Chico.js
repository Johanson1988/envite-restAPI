const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chicoSchema = new Schema({
    stonesTeamA: [{ type: Number, required: true}],
    stonesTeamB: [{ type: Number, required: true}],
    movementsList: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movement'}],
    winners: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Player'}],
    loosers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Player'}],
    chatMessages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ChatMessage'}]
  }, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    },
  });
  
  const Chico = mongoose.model('Chico', chicoSchema);
  
  module.exports = Chico;