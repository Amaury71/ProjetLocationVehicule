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
    }
});

var Voiture = module.exports = mongoose.model('Voiture', VoitureSchema);
