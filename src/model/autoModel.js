const mongoose = require("mongoose");

const autoSchema = mongoose.Schema({
    marca: {
        type: String
    },
    modelo:{
        type: String
    }
});

module.exports= mongoose.model('auto', autoSchema);