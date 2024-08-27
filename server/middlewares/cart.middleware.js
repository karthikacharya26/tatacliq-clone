const cart = async (req, res, next) => {
  const { productId } = req.params;

  try {
    req.body.productId = productId;
    next();
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = cart;
