import express from 'express';
import cartsRouter from './routes/carts.routes';
import productRouter from'./routes/products.routes.js';

const app = express();
const port = 8082;

app.use (express.json());


app.use("/api/products", productRouter);
app.use("/api/cart", cartsRouter )

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});