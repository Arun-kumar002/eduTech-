const express = require("express");
const {compilerControllerRead,compilerControllerPost} = require("../controllers/compilerController")
const router = express.Router();

router.get("/compiler",compilerControllerRead)
router.post("/compilecode",compilerControllerPost);

module.exports = router;