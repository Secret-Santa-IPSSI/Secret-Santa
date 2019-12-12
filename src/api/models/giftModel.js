const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let giftSchema = new Schema({
    label: {
        type: String,
        required: "Le libellé est requis"
    },
    details: {
        type: String,
        required: "Des précisions sont requises"
    },
    person_id: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model ('Gift', giftSchema);