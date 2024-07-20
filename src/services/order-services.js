import prisma from "../config/database.js";

async function postOrder({product_id, servations,status, form, name, code}){

        const objeto = {
            data:{product_id: parseInt(product_id), servations, status, name, code, form}
        }

        return await prisma.order.create(objeto)
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
    updateOrder,
    deleteOrder
}
