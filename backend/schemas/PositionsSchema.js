// ye schema jo hai  vo ek class hai joki mongose me hoti ahi
const {Schema} = require("mongoose");

const PositionsSchema = new Schema({
    product: String,
      name: String,
      qty: Number,
      avg: Number,
      price: Number,
      net: String,
      day: String,
      isLoss: Boolean,

});

module.exports = {PositionsSchema};