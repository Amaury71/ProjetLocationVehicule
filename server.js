var express = require("express")
var cors = require("cors")
var bodyParser = require("body-parser")
var app = express()
var mongoose = require("mongoose")
var port = process.env.PORT || 3000


require('./models/voitures');



app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

const mongoURI = 'mongodb://localhost:27017/serverVoiture';

mongoose.connect(mongoURI, { useNewUrlParser: true })
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

var Users = require("./routes/Users");
var Voitures = require("./routes/voitures");

app.use("/users", Users);
app.use("/voitures", Voitures);
app.use(express.static('./uploads'));



app.listen(port, function () {
  console.log("Server is running on port: " + port)
})
