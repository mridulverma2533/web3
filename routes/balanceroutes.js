const router=require("express").Router();

const controller = require("../controller/balancecontroller")

router.post("/fetchbalance",controller.balance)
router.post("/sendbalance",controller.sendbalance)
router.post("/account",controller.accounts)
router.post("/checkmining",controller.mining)
router.post("/connectionblock",controller.connection)
router.get("/viewbalance",controller.viewbalance)
router.get("/viewsendbalance",controller.viewsendbalance)
router.get("/viewaccounts",controller.viewaccounts)
router.get("/viewminig",controller.viewmining)
router.get("/viewblockchain",controller.viewblockcain)




module.exports=router;