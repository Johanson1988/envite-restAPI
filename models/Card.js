const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardSchema = new Schema({
    palo: {type:String, enum:['oros','bastos', 'copas', 'espadas'], required: true},
    valor: {type: Number, enum:[1,2,3,4,5,6,7,8,9,10], required: true},
    photoUrl: {type:String},
    createdBy: {type: mongoose.Schema.Types.ObjectId, ref: 'Player', required: true}
  }, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    },
  });
  
  const Card = mongoose.model('Card', cardSchema);
  
  module.exports = Card;