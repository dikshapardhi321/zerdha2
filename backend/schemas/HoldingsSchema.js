// ye schema jo hai  vo ek class hai joki mongose me hoti ahi
const {Schema} = require("mongoose");

const HoldingsSchema = new Schema({
    name:String,
    qty: Number,
    avg: Number,
    price:Number,
    net: String,
    day: String,

});

module.exports = {HoldingsSchema};