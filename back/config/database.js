const mongoose = require("mongoose");

const connectDataBase = () => {
  mongoose
    .connect(process.env.DB_LOCAL_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((con) => {
      console.log(`STONE STORE: DB CONNECTED to server: ${con.connection.host}`);
    })
    .catch((con) => {
      console.log(`STONE STORE: No DB connection`);
    });
};

module.exports = connectDataBase;
