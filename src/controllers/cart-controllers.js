import prisma from "../config/database.js";

export async function postCart(req, res){
    const {product_id, servations} = req.body;
    try{
        const productId = +product_id;
        const productExist = await prisma.products.findFirst({ where: { id: productId}})

        if(!productExist) return res.sendStatus(404);

        const cart = await prisma.cart.create({
            data: {
                product_id: productId, 
                servations
            }});
        
        await prisma.cart2.create({
            data: {
                product_id: productId, 
                servations
            }});
        
        res.status(201).send(cart);
    }catch(e){
        res.status(500).send(e);
    }
} 

export async function getCart(req, res){
    try{
        const carts = await prisma.cart.findMany({include:{
            products: true
        }});

        res.status(200).send(carts);
    }catch(e){
        res.status(500).send(e);
    }
}

export async function deleteCart(req, res){
    const {id} = req.params;
    try{
        await prisma.cart.delete({where:{
            id: +id
        }});

        await prisma.cart2.delete({where:{
            id: +id
        }});

        res.sendStatus(200);
    }catch(e){
        res.status(500).send(e);
    }
}