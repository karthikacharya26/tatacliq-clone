require("dotenv").config;
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const connection = require("./config/db");
const UserRouter = require("./routes/user.route");
const ProductRouter = require("./routes/product.route");
const CartRouter = require("./routes/cart.route");

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
app.use("/user", UserRouter);
app.use("/product", ProductRouter);
app.use("/cart", CartRouter);

app.get("/", (req, res) => {
  res.status(200).json({ msg: "server working" });
});

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Server is Running and DB is Connected.");
  } catch (error) {
    console.log(error.message);
  }
});
