const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = new Schema({
  //email:{ type: String, required: true, unique: true},
  username: { type: String, required: true, unique: true},
  password: { type: String, required: true},
  gamesPlayed: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Game'}],
  gamesCreated : [{ type: mongoose.Schema.Types.ObjectId, ref: 'Game'}],
  gamesWon : [{ type: mongoose.Schema.Types.ObjectId, ref: 'Game'}],
  movementsList: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movements'}],
  photoUrl: {type: 'String'}
  }, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    },
  });
  
  const Player = mongoose.model('Player', playerSchema);
  
  module.exports = Player;