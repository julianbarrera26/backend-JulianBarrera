import { Router } from "express";
import { cartsManager } from "../CartsManager.js";

const router = Router();
    
 router.post ('/', async (req,res)=>{

 });

 router.get('/:idCart', async(req,res)=>{
    const cartId = req.params.cartId;
    try {
        const cart = await cartsManager.getCartById(+cartId);
        if (!cart) {
          return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "User found", cart });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }

 });

 router.post ('/:idCart/product/idProduct', async (req,res)=>{
    const { title, descripcion, precio, id } = req.body;
    if (!title || !descripcion || !precio || !id) {
      return res.status(400).json({ message: "Some data is missing" });
    }
    try {
      const response = await cartsManager.addProductToCart(req.body);
      res.status(200).json({ message: "Product Agregado", product: response });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }

 });
  export default router;