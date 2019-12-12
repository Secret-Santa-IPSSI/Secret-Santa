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
    email: {
        type: String,
    },
    group_id:{
        type: String
    },

    id_person_to_give: {
        type: String
    }

});

module.exports = mongoose.model ('Person', personSchema);