import {Router} from "express";
import { deleteOrder, getOrderFazendo, getOrderName, getOrderPronto, postOrder, updateOrder } from "../controllers/order-controllers.js";
import validateSchema from "../middlewares/validateSchema.js";
import { orderSchema } from "../schemas/orderSchema.js";

const orderRouter = Router();

orderRouter
.post("/order", validateSchema(orderSchema),postOrder)
.get("/order", getOrderFazendo)
.get("/order-ready", getOrderPronto)
.get("/order-name/:name", getOrderName)
.put("/order/:id", updateOrder)
.delete("/order/:id", deleteOrder)

export {orderRouter}