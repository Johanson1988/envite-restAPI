const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chatMessageSchema = new Schema({
    message: { type: String, required: true},
    gameId: { type: mongoose.Schema.Types.ObjectId, ref: 'Game', required: true},
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Player', required: true},
  }, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    },
  });
  
  const ChatMessage = mongoose.model('ChatMessage', chatMessageSchema);
  
  module.exports = ChatMessage;