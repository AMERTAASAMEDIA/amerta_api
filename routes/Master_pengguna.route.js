const express = require("express");
const Masterpengguna = require("../models/Master_pengguna.model.js");
const router = express.Router();
const { getMasterpengguna, getMasterpenggunaid, createMasterpengguna, updateMasterpengguna } = require('../controllers/Master_pengguna.controller.js');


router.get("/Masterpengguna/getdata", getMasterpengguna);
router.get("/Masterpengguna/getbyid/:id", getMasterpenggunaid);

router.post("/Masterpengguna/create", createMasterpengguna);

// update a product
router.put("/Masterpengguna/updatebyid/:id", updateMasterpengguna);


module.exports = router;