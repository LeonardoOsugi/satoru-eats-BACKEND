import prisma from "../config/database.js";


async function postOrder({objeto}){
    return await prisma.order.create(objeto);
}

async function getOrderFazendo(){
    return await prisma.order.findMany({
        where: {
            status: "FAZENDO"
        },
        include: {
            products: true,
        }
    });
}

async function getOrderPronto(){
    return await prisma.order.findMany({
        where: {
            status: "PRONTO"
        },
        include: {
            products: true
        }
    });
}

async function getOrderName({name}){
    return await prisma.order.findMany({
        where: {
            name
        },
        include: {
            products: true
        }
    });

}

async function getOrderId({id}){
    return await prisma.order.findFirst({
        where: {
            id
        },
        include: {
            products: true
        }
    })
}

async function updateOrder({id}){
    return await prisma.order.update({
        where:{
            id
        },
        data: {
            status: "PRONTO"
        }
    });
}

async function deleteOrder({id}){
    return await prisma.order.delete({
        where: {
            id
        }
    });
}

export default {
    postOrder,
    getOrderFazendo,
    getOrderPronto,
    getOrderName,
    getOrderId,
    updateOrder,
    deleteOrder
}