import prisma from "../config/database.js";

export async function postOrder(req, res){
    const {product_id,order_id, sevations,status, form, name, code} = req.body;
    try{
        
        await prisma.order.create({data:{ form}});

        const order = await prisma.order_products.create({data:{product_id, order_id, sevations, status, name, code}})

        res.status(201).send(order);
    }catch(e){
        res.status(200).send(e);
    }
}



export async function getOrderFazendo(req, res){
    try{
        const order = await prisma.order_products.findMany({
            where: {
                status: "FAZENDO"
            },
            include: {
                products: true,
                order: true
            }
        });

        res.status(200).send(order);
    }catch(e){
        res.status(500).send(e);
    }
}

export async function getOrderPronto(req, res){
    try{
        const order = await prisma.order_products.findMany({
            where: {
                status: "PRONTO"
            },
            include: {
                products: true,
                order: true
            }
        });

        res.status(200).send(order);
    }catch(e){
        res.status(500).send(e);
    }
}

export async function getOrderName(req, res){
    const {name, code} = req.body;
    try{
        const order = await prisma.order_products.findMany({
            where: {
                name: name,
                code: code
            },
            include: {
                products: true,
                order: true
            }
        });

        res.status(200).send(order);
    }catch(e){
        res.status(500).send(e);
    }
}

export async function updateOrder(req, res){
    const id = +req.params.id; 
    try{ 
        const update = await prisma.order_products.update({
            where:{
                id
            },
            data: {
                status: "PRONTO"
            }
        })

        res.status(200).send(update)
    }catch(e){
        res.status(500).send(e)
    }
}

export async function deleteOrder(req, res){
    const id = +req.params.id;
    try{ 
        await prisma.order_products.delete({
            where: {
                id
            }
        })
        res.sendStatus(200)
    }catch(e){
        res.status(500).send(e)
    }
}