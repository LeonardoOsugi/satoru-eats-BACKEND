import prisma from "../config/database.js";

export async function postOrder(req, res){
    console.log(req.body, "req.body");
    const {product_id, servations,status, form, name, code} = req.body;
    try{
        const objeto = {
            data:{product_id: parseInt(product_id), servations, status, name, code, form}
        }


        const order = await prisma.order.create(objeto)

        res.status(201).send(order);
    }catch(e){
        console.log(e);
        res.status(400).send(e);
    }
}



export async function getOrderFazendo(req, res){
    try{
        const order = await prisma.order.findMany({
            where: {
                status: "FAZENDO"
            },
            include: {
                products: true,
            }
        });

        res.status(200).send(order);
    }catch(e){
        res.status(500).send(e);
    }
}

export async function getOrderPronto(req, res){
    try{
        const order = await prisma.order.findMany({
            where: {
                status: "PRONTO"
            },
            include: {
                products: true
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
        const order = await prisma.order.findMany({
            where: {
                name: name,
                code: code
            },
            include: {
                products: true
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
        const update = await prisma.order.update({
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
        await prisma.order.delete({
            where: {
                id
            }
        })
        res.sendStatus(200)
    }catch(e){
        res.status(500).send(e)
    }
}