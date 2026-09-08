const mongoose = require("mongoose");

const Bhoolschema = new mongoose.Schema({
    name: { type: String, default: 'hahaha' },
    email:{type:String},
    age: { type: Number, index: true },
    date: { type: Date, default: Date.now },
    std: { type: Number,min:1 },
    roll: { type: Number, min: 1 }
});

const Bhool = mongoose.model('Bhool', Bhoolschema);

module.exports=Bhool;

