
const Web3 = require("web3")

exports.balance = async (req,res)=>{
    try{
        const {address,rpcurl} = req.body;
    
        const web3 = await new Web3(rpcurl)

const Balance = await web3.eth.getBalance(address).then((Balance)=>{
    // const Balance = web3.utils.fromWei(wei,'ether')
    res.send(web3.utils.fromWei(Balance,'ether'))



})

// res.send(console.log)
// res.send();

// res.send("see your console terminal")


    }catch(e){
        console.log(e);
        res.status(500).json(e)
    }
},
exports.sendbalance =async (req,res)=>{
    try{
        const {rpcurl,address,privatekey,receiver,value,gas}=req.body
        const web3 = new Web3(rpcurl)
        // const {add}=req.body
     const add = address
    //  const {private}=req.body
const key = privatekey
// const {receiv = req.body

const receiv = receiver
const deploy = async ()=>{
    // res.send(`sending a transaction from ${add} to ${receiv}` );
    const createtransaction = await web3.eth.accounts.signTransaction({
        from:add,
        to:receiv,
        value:web3.utils.toWei(value.toString()),
        gas:gas
    },key)

    const receipt = await web3.eth.sendSignedTransaction(createtransaction.rawTransaction);
    res.send(`transaction successful with hash:${receipt.transactionHash} ,sending a transaction from ${add} to ${receiv}`);
}
deploy()
// res.send("transaction successful see your console terminal")


    }catch(e){
        console.log(e);
        res.status(500).send(e)
    }
},
exports.accounts = async (req,res)=>{
    try{
        const {rpcurl} =req.body 
        const web3 = new Web3(rpcurl)
        const account = web3.eth.getAccounts().then((account)=>{
            res.send(account)
        })

    }catch(e){
        console.log(e);
        res.send(e)
    }
},
exports.connection = async (req,res)=>{
    try{
        var {rpcurl}=req.body
        var provider = rpcurl;
var web3Provider = new Web3.providers.HttpProvider(provider);
var web3 = new Web3(web3Provider);
var data = web3.eth.getBlockNumber().then((data) => {
     res.send("see your console")
    console.log(data);


});

    }catch(e){
        console.log(e);
        res.send(e)
    }
},
exports.viewbalance = async (req,res)=>{
    res.render("balance")
},
exports.viewsendbalance = async (req,res)=>{
    res.render("transaction")
}
exports.viewaccounts = async (req,res)=>{
    res.render("viewaccount")
},
exports.mining = async (req,res)=>{
    try{
        const {rpcurl} = req.body;
    
        const web3 = await new Web3(rpcurl)

        const mining = web3.eth.isMining().then((mining)=>{
            res.send(mining)
        })

    }catch(e){
        console.log(e);
        res.status(500).json(e)
    }
},
exports.viewmining = async (req,res)=>{
    res.render("mining")
},
exports.viewblockcain = async (req,res)=>{
    res.render("blockchain")
}
