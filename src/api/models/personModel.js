const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let personSchema = new Schema({
    name: {
        type: String,
        required: "Le nom est requis"
    },
    lastname: {
        type: String,
        required: "Le prénom est requis"
    },
    group_id :{
        type: String,
        required: true
    },

    person_givname: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model ('Person', personSchema);