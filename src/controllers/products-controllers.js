import prisma from "../config/database.js";

export async function getProducts(req, res){
    const {product_name, code} = req.query;

    try{

        let whereconditional = {};

        if (product_name !== undefined && product_name !== '') {
            whereconditional = { ...whereconditional, product_name: product_name };
        }

        if (code !== undefined && code !== '') {
            whereconditional = { ...whereconditional, code: code };
        }
        const products = await prisma.products.findMany({where: whereconditional});

        
        res.status(200).send(products);
    }catch(e){
        res.status(500).send(e);
    }
}