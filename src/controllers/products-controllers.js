import prisma from "../config/database.js";

export async function getProducts(req, res){
    try{
        const products = await prisma.products.findMany({});
        
        res.status(200).send(products);
    }catch(e){
        res.status(500).send(e);
    }
}