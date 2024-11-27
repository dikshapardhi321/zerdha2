// ye model jo hai  vo ek class hai joki mongose me hoti ahi
const {model} = require("mongoose");
const {HoldingsSchema} = require("../schemas/HoldingsSchema");
// yaha jab hum holding likhre hai toh database me jab ye jata hai toh ye holding se holdings me convert ho jata hai isliye hamara collection of data store hota hai
const HoldingsModel = new model("holding",HoldingsSchema);

module.exports = {HoldingsModel};