import {Router} from "express";
import { deleteCart, getCart, postCart } from "../controllers/cart-controllers.js";

const cartsRouter = Router();

cartsRouter
.post("/carts", postCart)
.get("/carts", getCart)
.delete("/carts/:id", deleteCart)

export {cartsRouter}