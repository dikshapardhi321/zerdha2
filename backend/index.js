// mongodb se connect karne ke liye usi url access karna padenga and vo humne .env file me kiye hai isliye yaha likhre hi
// this help to read data from file & config is the method which is used to read data
require('dotenv').config();

// so ek certain process hoti hai jo vo url ko express me store kar dengi toh usi ko hum process bolte hai .toh connection stablish karne ke liye hume mongoose chahiye and mongoose ke ander jo process hai connection ki vo hi mongoose.connect vo bhi use kar lenge.

// express template
const express=require("express");
const mongoose = require('mongoose');

// axios ko run hone ke liye network error aate hai isliye hum body parser use karenge
const bodyParser = require('body-parser');
const cors = require('cors');

const {HoldingsModel} = require('./model/HoldingsModel');

const {PositionsModel}=require('./model/PositionsModel');


const {OrdersModel} = require('./model/OrdersModel');
// port bhi process ke through laye hai
const PORT = process.env.PORT || 3002;

// ye process ka mtlb hai ki ye url ko express me store karenge vo url ko jo env file me hai if ye url find nhi hua toh 3002 pe hmara progm run honga
const url = process.env.MONGO_URL ;
// ye express ka construction ek application craete kara ahi
const app=express();
// ye cors ko access karne ke liye use hota hai
app.use(cors());
// hum josn data bhejre hai and isase hum bodyparser use karenge
app.use(bodyParser.json());

// hume dummy data dalna hai isliye hum ye route bnare hai

// holding and positions ko humne database me dal diye hai isliye ye databse me save ho chuke hai isliye hum isko comments me bhi dal diye toh farak nhi padenga koi
// app.get("/addHoldings",async(req,res)=>{
// let tempHoldings = [
//     {
//       name: "BHARTIARTL",
//       qty: 2,
//       avg: 538.05,
//       price: 541.15,
//       net: "+0.58%",
//       day: "+2.99%",
//     },
//     {
//       name: "HDFCBANK",
//       qty: 2,
//       avg: 1383.4,
//       price: 1522.35,
//       net: "+10.04%",
//       day: "+0.11%",
//     },
//     {
//       name: "HINDUNILVR",
//       qty: 1,
//       avg: 2335.85,
//       price: 2417.4,
//       net: "+3.49%",
//       day: "+0.21%",
//     },
//     {
//       name: "INFY",
//       qty: 1,
//       avg: 1350.5,
//       price: 1555.45,
//       net: "+15.18%",
//       day: "-1.60%",
//       isLoss: true,
//     },
//     {
//       name: "ITC",
//       qty: 5,
//       avg: 202.0,
//       price: 207.9,
//       net: "+2.92%",
//       day: "+0.80%",
//     },
//     {
//       name: "KPITTECH",
//       qty: 5,
//       avg: 250.3,
//       price: 266.45,
//       net: "+6.45%",
//       day: "+3.54%",
//     },
//     {
//       name: "M&M",
//       qty: 2,
//       avg: 809.9,
//       price: 779.8,
//       net: "-3.72%",
//       day: "-0.01%",
//       isLoss: true,
//     },
//     {
//       name: "RELIANCE",
//       qty: 1,
//       avg: 2193.7,
//       price: 2112.4,
//       net: "-3.71%",
//       day: "+1.44%",
//     },
//     {
//       name: "SBIN",
//       qty: 4,
//       avg: 324.35,
//       price: 430.2,
//       net: "+32.63%",
//       day: "-0.34%",
//       isLoss: true,
//     },
//     {
//       name: "SGBMAY29",
//       qty: 2,
//       avg: 4727.0,
//       price: 4719.0,
//       net: "-0.17%",
//       day: "+0.15%",
//     },
//     {
//       name: "TATAPOWER",
//       qty: 5,
//       avg: 104.2,
//       price: 124.15,
//       net: "+19.15%",
//       day: "-0.24%",
//       isLoss: true,
//     },
//     {
//       name: "TCS",
//       qty: 1,
//       avg: 3041.7,
//       price: 3194.8,
//       net: "+5.03%",
//       day: "-0.25%",
//       isLoss: true,
//     },
//     {
//       name: "WIPRO",
//       qty: 4,
//       avg: 489.3,
//       price: 577.75,
//       net: "+18.08%",
//       day: "+0.32%",
//     },
//   ];

// //   yaha har item ke liyehum data save karna hai
//   tempHoldings.forEach((item)=>{
//     let newHolding = new HoldingsModel({
//         name:item.name,
//         qty:item.qty,
//         avg: item.avg,
//         price:item.price,
//         net: item.net,
//         day: item.day,
//     });
//     // ye saveka mtlb hai ki hum line by line database ko sve karte jare hai
//     newHolding.save();
//   });
// res.send("Done!");
// });
// app.get("/addPositions",async(req,res)=>{
//     let tempPositions = [
//         {
//           product: "CNC",
//           name: "EVEREADY",
//           qty: 2,
//           avg: 316.27,
//           price: 312.35,
//           net: "+0.58%",
//           day: "-1.24%",
//           isLoss: true,
//         },
//         {
//           // ye data hume mongod me collecftion me dikhenga 
//           product: "CNC",
//           name: "JUBLFOOD",
//           qty: 1,
//           avg: 3124.75,
//           price: 3082.65,
//           net: "+10.04%",
//           day: "-1.35%",
//           isLoss: true,
//         },
//       ];
    
//     //   yaha har item ke liyehum data save karna hai
//       tempPositions.forEach((item)=>{
//         let newPosition = new PositionsModel({
//             product: item.product,
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//       isLoss: item.isLoss,
//         });
//         // ye saveka mtlb hai ki hum line by line database ko sve karte jare hai
//         newPosition.save();
//       });
//     res.send("Done!");
//     });

// ab ye data mongodb me chale gya ab usko dashboard me fetch karne hai toh hum hooks ka use karenge
app.get("/allHoldings",async(req,res)=>{
  // ye find wala ek mongodb ka command hai jo dta ko fetch ya search karne keliye use hota hai.
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});


// isase hoppscotch par possition ka array show honga
app.get("/allPositions",async(req,res)=>{
  // ye find wala ek mongodb ka command hai jo dta ko fetch ya search karne keliye use hota hai.
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

// humko datat send karna hai and data user se lena hai isliye hum post method use karenge
// ye hum user se data insert karenge iska koi dummy data nhi hai isliye hum user se data send karenge
app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  newOrder.save();

  res.send("Order saved!");
});


// upar jo application create kiye vo run karenge app.listen ke help se
app.listen(PORT,()=>{
    console.log("App started");
    // isase hum database mongodb se connect kare hai hamari file ko
     mongoose.connect( url );
     console.log("DB connected");
});
