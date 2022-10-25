import mongoose from "mongoose";

mongoose.connect("mongodb://Localhost/stonestoredb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    
    .then(db => console.log("STONE STORE NOW CONNECTED WITH DB"))
    .catch(error => console.log(error))
