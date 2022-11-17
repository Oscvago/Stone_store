const mongoose = require("mongoose");

const MONGO_URL = "mongodb+srv://AngelaIC:Tomoe2020@cluster0.lftybkg.mongodb.net/StoreStone?retryWrites=true&w=majority";

const db = async () => {
    await mongoose.connect(MONGO_URL)
    .then(() => console.log("Shopping Cart Stone Store DB is Ok"))
    .catch((error) => console.error(error));
};

module.exports = db