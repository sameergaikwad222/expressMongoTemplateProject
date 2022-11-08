require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const baseRoute = require("./routes/base");
const { connectDB } = require("./utils/dbConnect");

app.use(express.json());

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(
        `Example app listening on port http://localhost:${PORT} after connecting to Mongo Database`
      );
    });
  })
  .catch((e) => console.log(`Unable to Connect to database with error ${e}`));

app.get("/", (req, res) => {
  res.status(200).send("<h1>Node Template Project</h1>");
});

app.use("/api/v1", baseRoute);
