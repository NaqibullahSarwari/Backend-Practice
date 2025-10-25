import Product from "../model/ModelProduct.js";

export const getAllProducts = async (req, res) => {
  try {
    const productsData = await Product.find({});
    res.status(200).json(productsData);
  } catch (error) {
    res.status(500).json({ message: "Interal Server Error" });
  }
};
export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findOne({ id: Number(id) });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const createProducts = async (req, res) => {
  try {
    const productsData = new Product(req.body);
    const {
      id,
      title,
      description,
      price,
      discountPercentage,
      rating,
      stock,
      brand,
      category,
      thumbnail,
    } = productsData;
    const productExist = await Product.findOne(productsData);

    if (productExist) {
      res.status(404).json({ message: "Product Already Exists!" });
    }

    const savedProduct = await productsData.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ message: "Interal Server Error" });
  }
};
