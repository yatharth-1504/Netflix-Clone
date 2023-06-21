const mongoose = require("mongoose");

const db = process.env.DB;

const connectMongo = async () => {
  await mongoose
    .connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB connected succesfully"))
    .catch((e) => console.log(e));
};

connectMongo();