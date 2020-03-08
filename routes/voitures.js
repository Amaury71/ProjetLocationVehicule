var express = require('express');
const UM = require("../middlewares/voitures");
var router = express.Router();

router.param("voitureId",UM.voitureIdParam);

router.route('/')
    .get(UM.sendVoitures)
    .post(UM.newVoiture);

router.route('/:voitureId')
    .get(UM.sendVoiture)
    .put(UM.updateVoiture, UM.sendVoiture)
    .delete(UM.deleteVoiture, UM.sendVoiture);

router.put('/:voitureId')
module.exports = router;
