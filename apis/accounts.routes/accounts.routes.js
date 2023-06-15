const express = require("express");
const router = express.Router();
let accounts = require("../../accounts");
const {
  getAllAccounts,
  updateAcc,
  deleteAcc,
  createAcc,
} = require("./accounts.controllers");

router.get("/", getAllAccounts);

router.post("/", createAcc);

router.delete("/:accID", deleteAcc);

router.put("/:accID", updateAcc);

module.exports = router;
