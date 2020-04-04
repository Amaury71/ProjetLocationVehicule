const mongoose = require('mongoose');

// Voiture Schema
var VoitureSchema = mongoose.Schema({
    modele: {
        type: String,
        required: true
    },
    prix:{
        type: Intl,
        required: true
    },
    productImage:{
        type:String,
        required:false
    }
});

var Voiture = module.exports = mongoose.model('Voiture', VoitureSchema);
