const express = require("express");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");
const connectDB = require("./config/database");
const authRoutes = require("./routers/authRoutes");
const prodects = require("./routers/prodect");
const orders = require("./routers/order");

dotenv.config({ path: path.join(__dirname, "config", "config.env") });

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.use("/", authRoutes);
app.use("/", prodects);
app.use("/", orders);

app.listen(process.env.PORT, () => {
  console.log(
    `Server is listening  to PORT: ${process.env.PORT} in ${process.env.NODE_ENV}`,
  );
});
