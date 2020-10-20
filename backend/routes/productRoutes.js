import express from 'express';
import asyncHandler from 'express-async-handler';
const router = express.Router();
import Product from '../models/productModel.js';

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
// get包含（link， asyncHandler (async function)
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({});

    res.json(products);
  })
);

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    // 如果这里出错 就是product id格式错了 此处的错误是被重写的errorHandler

    if (product) {
      res.json(product);
    } else {
      // res.status(404).json({ message: '没有这个商品' });
      // 上面这句话的捕捉范围有限
      // 下面这句话是 product id 格式正确 但是内容不对
      res.status(404);
      throw new Error('Product not found');
    }
  })
);

export default router;
