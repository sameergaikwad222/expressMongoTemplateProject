require("dotenv").config();
const mongoose = require("mongoose");

async function connectDB() {
  await mongoose.connect(
    `${process.env.DBURL}/${process.env.DBNAME}`,
    { useNewURLParser: true },
    (err) => {
      if (err) console.log(err);
      else console.log("Connected to Mongo Database");
    }
  );
}

module.exports = { connectDB };
