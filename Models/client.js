const mongoose = require("mongoose");

const Clientschema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    }
});

const Client = mongoose.model('Client', Clientschema);
module.exports = Client;