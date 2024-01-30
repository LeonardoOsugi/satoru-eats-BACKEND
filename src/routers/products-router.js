import { Router } from "express";
import { getProducts, getProductsId} from "../controllers/products-controllers.js";

const productsRouter = Router();

productsRouter
.get("/products", getProducts)
.get("/products/:id", getProductsId)


export {productsRouter}