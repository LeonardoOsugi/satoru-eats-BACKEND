import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { productsRouter } from "./routers/products-router.js";
import { cartsRouter } from "./routers/cart-router.js";

dotenv.config();

const app = express();
app.use(cors())
.use(express.json())
.use(productsRouter)
.use(cartsRouter);


const port = process.env.PORT || '4000';
app.listen(port, () => console.log(`Server running in port: ${port}`));