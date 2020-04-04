var express = require('express');
const UM = require("../middlewares/voitures");
var router = express.Router();
const multer  = require('multer');
const storage=multer.diskStorage({
destination: function (req,file,cb) {
    cb(null,'./uploads/');
},
    filename: function (req, file, cb) {
        cb(null,new Date().toISOString().replace(/:/g, '-')+file.originalname);
    }
});
const upload = multer({ storage: storage});


router.param("voitureId",UM.voitureIdParam);

router.route('/')
    .get(UM.sendVoitures)
    .post(upload.single('productImage'),UM.newVoiture);

router.route('/:voitureId')
    .get(UM.sendVoiture)
    .put(UM.updateVoiture, UM.sendVoiture)
    .delete(UM.deleteVoiture, UM.sendVoiture);

router.put('/:voitureId')
module.exports = router;
