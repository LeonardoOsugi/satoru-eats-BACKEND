import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { productsRouter } from "./routers/procusts-router.js";

dotenv.config();

const app = express();
app.use(cors())
.use(express.json())
.use(productsRouter);


const port = process.env.PORT || '4000';
app.listen(port, () => console.log(`Server running in port: ${port}`));