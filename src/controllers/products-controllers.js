import prisma from "../config/database.js";

export async function getProducts(req, res){
    const {product_name, code_product} = req.query;

    try{

        let whereconditional = {};

        if (product_name !== undefined && product_name !== '') {
            whereconditional = { ...whereconditional, product_name: product_name };
        }

        if (code_product !== undefined && code_product !== '') {
            whereconditional = { ...whereconditional, code_product: code_product };
        }
        const products = await prisma.products.findMany({where: whereconditional});

        
        res.status(200).send(products);
    }catch(e){
        res.status(500).send(e);
    }
}