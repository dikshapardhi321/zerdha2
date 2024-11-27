// ye schema jo hai  vo ek class hai joki mongose me hoti ahi
const {Schema} = require("mongoose");

const OrdersSchema = new Schema({
    name:String,
    qty: Number,
    price:Number,
    mode: String,

});

module.exports = {OrdersSchema};