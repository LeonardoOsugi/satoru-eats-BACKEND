import prisma from "../config/database.js";
import productsServices from "../services/products-services.js";

export async function getProducts(req, res){
    const {product_name, code_product} = req.query;

    try{
        const products = await productsServices.getProducts({product_name, code_product})

        
        res.status(200).json(products);
    }catch(e){
        res.status(500).send(e);
    }
}


export async function getProductsId(req, res){
    const {id} = req.params;
    const productId = +id;

    try{
        const product = await productsServices.getProductsId({productId})

        res.status(200).json(product);
    }catch(e){
        res.status(500).send(e)
    }
}