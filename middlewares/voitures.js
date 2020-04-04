const mongoose = require('mongoose');
const Voiture = mongoose.model('Voiture');

module.exports = {
    voitureIdParam:  function(req, res, next, id) {
        Voiture.find({"_id":id}).exec(function (err,voiture) {
            if (err) {
                return next({
                    message: "La voiture n'a pas pu être récupérée."
                });
            }
            if(voiture.length===0){
                return next({
                    status:404,
                    message:"Voiture introuvable"
                })
            }
            req.data.voiture = voiture[0];
            next();
        });
    },
    sendVoiture: function (req, res) {
        res.send({voiture: req.data.voiture});
    },
    sendVoitures: function (req, res, next){
        Voiture.find().exec(function (err,voitures) {
            if (err) {
                return next({
                    message: "Les voitures n'ont pas pu être récupérées."
                });
            }
            res.send(voitures);
        });
    },
    updateVoiture: function(req, res, next){
        if(req.body.modele) req.data.voiture.modele = req.body.modele;
        if(req.body.prix) req.data.voiture.prix = req.body.prix;
        req.data.voiture.save(function(err, voitureUpdated){
            if (err){
                return next({
                    message: "La voiture n'a pas pu être mise à jour."
                });
            }
            req.data.voiture = voitureUpdated;
            next();
        });
    },
    newVoiture: function(req, res, next){
        console.log(req.file);
        //Gestion de la date pour la BDD
        let date = new Date();
        const voiture = new Voiture({
            modele: req.body.modele,
            prix: req.body.prix
        });
        voiture.save(function(err, voitureSaved){
            if(err){ return next(err); }
            res.send(voitureSaved);
        });
    },
    deleteVoiture: function(req,res){
        req.data.voiture.deleteOne(function (err) {
            if (err){
                next({
                    message: "La voiture n'a pas pu être supprimée."
                });
            }
            res.send({success:1});
        })
    },

};
