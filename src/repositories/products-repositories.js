import prisma from "../config/database.js";


async function getProducts({whereconditional}){
    return await prisma.products.findMany({where: whereconditional});
}

async function getProductsId({productId}){
    return await prisma.products.findFirst({where: {id: productId}});
}

export default {
    getProducts,
    getProductsId
}