import prisma from "../config/database.js";
import productsRepositories from "../repositories/products-repositories.js";


async function getProducts({product_name, code_product}){
    let whereconditional = {};

    if (product_name !== undefined && product_name !== '') {
        whereconditional = { ...whereconditional, product_name: product_name };
    }

    if (code_product !== undefined && code_product !== '') {
        whereconditional = { ...whereconditional, code_product: code_product };
    }

    const products = await productsRepositories.getProducts({whereconditional});

    if(!products) throw new Error("Produtos não encontrados")

    return products
}

async function getProductsId({productId}){
    const product = await productsRepositories.getProductsId({productId});

    if(!product) throw new Error("Produto não encontrado");

    return product
}

export default {
    getProducts,
    getProductsId
}