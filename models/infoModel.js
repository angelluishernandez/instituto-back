const mongoose = require("mongoose");

const infoSchema = new mongoose.Schema({}, { capped: { size: 1024, max: 1 } });
