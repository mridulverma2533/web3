const express = require("express");
const Web3 = require("web3")
// const path = require("p
const app = express();
const port =process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
const balanceroutes = require("./routes/balanceroutes")
app.set("view engine", "hbs")

app.use(balanceroutes)


app.listen(port,(req,res)=>{
    console.log(`listining on ${port}`)
})