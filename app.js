const express = require("express");
const sequelize = require("./database");
const productRoutes = require("./routes/product");
const bodyParser = require("body-parser");
const cors = require("cors");
const Product = require("./models/products");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/", productRoutes);

app.all("/", (req, res) => {
  res.send("<h2>Page Not Found</h2>");
});
sequelize;
//   .sync({ force: true })
sequelize
  .sync()
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
