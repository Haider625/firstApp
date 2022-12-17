const express = require("express");
const bodyParser = require("body-parser")
const productsRout = require("./route/products");
const app = express();
const mongoose = require('mongoose')
const PORT =process.env.PORT || 5000;

mongoose.connect('mongodb://firstApp:firstApp@ac-lvlpksx-shard-00-00.fxyvpqe.mongodb.net:27017,ac-lvlpksx-shard-00-01.fxyvpqe.mongodb.net:27017,ac-lvlpksx-shard-00-02.fxyvpqe.mongodb.net:27017/?ssl=true&replicaSet=atlas-73zgu9-shard-0&authSource=admin&retryWrites=true&w=majority',{
useNewUrlParser:true ,
useUnifiedTopology : true
}
);
const connection = mongoose.connection;
connection.on('error' , () => {
    console.log("error whith database")
});
connection.on('connected' , () => {
    console.log("connected whith cloud")
})
    app.use([bodyParser.urlencoded({extended : true}),express.json()]);
app.use("/products" , productsRout);

app.listen(PORT,() => {
    console.log("it is work");
})
module.exports = app