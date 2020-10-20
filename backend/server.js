import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

dotenv.config();
connectDB();
const app = express();

app.get('/', (req, res) => {
  res.send('API is running...');
});

// 注意这里的url, 相当于如果去这个前缀，则去productRoutes
app.use('/api/products', productRoutes);

app.use(notFound);
app.use(errorHandler);

let today = new Date();
let time =
  today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} on port ${PORT} at ........ ${time}`
      .yellow.bold
  )
);
