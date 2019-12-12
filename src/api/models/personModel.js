const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let personSchema = new Schema({
    firstname: {
        type: String,
        required: "Le nom est requis"
    },
    lastname: {
        type: String,
        required: "Le prénom est requis"
    },
    group_id :{
        type: String
    },

    person_givname: {
        type: String
    }

});

module.exports = mongoose.model ('Person', personSchema);