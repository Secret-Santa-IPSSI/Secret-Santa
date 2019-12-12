const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let giftSchema = new Schema({
    name: {
        type: String,
        required: "Le nom est requis"
    },
    link: {
        type: String,
        required: "Le message est requis"
    },
    created_at : {
        type: Date,
        default: Date.now
    },
    person_id: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model ('Gift', giftSchema);