import prisma from "../config/database.js";


async function getProducts({product_name, code_product}){
    let whereconditional = {};

    if (product_name !== undefined && product_name !== '') {
        whereconditional = { ...whereconditional, product_name: product_name };
    }

    if (code_product !== undefined && code_product !== '') {
        whereconditional = { ...whereconditional, code_product: code_product };
    }

    return await prisma.products.findMany({where: whereconditional});
}

async function getProductsId({productId}){
    return await prisma.products.findFirst({where: {id: productId}});
}

export default {
    getProducts,
    getProductsId
}