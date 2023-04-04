const Product = require("./../models/products");

exports.postProduct = async (req, res) => {
  console.log(req.body);

  const product = {
    price: req.body.price,
    name: req.body.name,
  };
  await Product.create(product);
  res.redirect("/products");
};

exports.getProducts = async (req, res) => {
  const products = await Product.findAll();
  res.status(201).json({
    data: products,
  });
};

exports.deleteProduct = (req, res) => {
  console.log(req.params.id);
  Product.findByPk(req.params.id)
    .then((product) => {
      return product.destroy();
    })
    .then((result) => {
      res.json({
        data: null,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
