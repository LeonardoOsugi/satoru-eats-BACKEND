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


export async function getProductsId(req, res){
    const {id} = req.params;
    const productId = +id;

    try{
        const product = await prisma.products.findFirst({where: {id: productId}});

        res.status(200).send(product);
    }catch(e){
        res.status(500).send(e)
    }
}