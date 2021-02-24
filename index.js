const express = require("express");

const app = express();
const router = express.Router();

router.use("/products", (req, res, next) => {
  res.json({ name: "Rafi Nur Oktafian", email: "rafi@gmail.com" });
  next();
});

router.use("/price", (req, res, next) => {
  res.json({ price: 30000000 });
  next();
});

router.delete("/customers", (req, res, next) => {
  res.json({ title: "Customer" });
  next();
});

app.use("/", router);

// GET '/users' => [{name: rafi}]

app.listen(4000);
